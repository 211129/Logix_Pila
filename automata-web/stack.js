export default class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  addAll(arr) {
    this.stack = [...this.stack, ...arr];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  toArray() {
    return this.stack;
  }

  toString() {
    let string = "[";
    this.stack.forEach((el) => {
      string += el.name + ", ";
    });
    string = string.substring(0, string.length - 2);
    string += "]";

    return string;
  }
}
