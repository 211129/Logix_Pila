import Stack from "./stack.js";
import { getElement } from "./utils.js";

export default class Verifier {
  constructor() {
    this.logs = "";
  }

  verify(code, stack, index) {
    while (!stack.isEmpty()) {
      this.logs += `${stack}\n`;
      const currentItem = stack.peek();
      console.log(`currentElement: ${getElement(index, code)}`);
      console.log(`stack: ${stack.toString()}`);

      if (currentItem.isTerminal) {
        const currentElement = getElement(index, code);
        if (currentItem.isRegex) {
          const regex = new RegExp(currentItem.values[0]);
          if (regex.test(currentElement)) {
            stack.pop();
            index++;
          } else {
            return false;
          }
        } else {
          let band = false;

          for (let i = currentItem.values.length - 1; i >= 0; i--) {
            if (currentElement === currentItem.values[i]) {
              stack.pop();
              index++;
              band = true;
              break;
            }
          }

          if (!band) {
            return false;
          }
        }
      } else {
        const itemNoTerminal = stack.pop();

        for (let i = 0; i < itemNoTerminal.productions.length; i++) {
          const prods = itemNoTerminal.productions[i];

          const newStack = new Stack();
          newStack.addAll(stack.toArray());

          for (let i = prods.length - 1; i >= 0; i--) {
            newStack.push(prods[i]);
          }

          if (this.verify(code, newStack, index)) {
            return true;
          }
        }

        return false;
      }
    }
    return true;
  }
}
