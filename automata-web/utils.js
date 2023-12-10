export function getElement(index, code) {
  const elements = separateElements(code);
  if (index < 0 || index >= elements.length) {
    return "$";
  }

  return elements[index];
}

export function separateElements(text) {
  const elements = [];
  let currentWord = [];

  let i = 0;
  while (i < text.length) {
    const ch = text[i];

    if (ch.match(/[a-zA-Z_]/) || ch === "_") {
      // Si es una letra o guión bajo, es parte de una palabra
      currentWord.push(ch);
    } else {
      if (currentWord.length > 0) {
        // Si hay una palabra almacenada, añádela a la lista de elementos
        elements.push(currentWord.join(""));
        currentWord = [];
      }

      // Comprobar otros caracteres especiales
      if (["()", "{}", ";", "=", ",", ":", "$"].includes(ch)) {
        elements.push(ch);
      } else if (ch === "(" || ch === ")") {
        // detectar paréntesis
        elements.push(ch);
      } else if (ch === "{" || ch === "}") {
        // detectar llaves
        elements.push(ch);
      } else if (ch === '"' || ch === "'") {
        // Si se encuentran comillas, añadir la comilla de apertura como un elemento separado
        elements.push(ch);

        // Recoger el contenido de la cadena
        const stringContent = [];
        i += 1; // Saltar al siguiente carácter después de la comilla inicial
        while (i < text.length && text[i] !== ch) {
          stringContent.push(text[i]);
          i += 1;
        }

        // Añadir el contenido de la cadena como un elemento separado
        elements.push(stringContent.join(""));

        // Añadir la comilla de cierre como un elemento separado
        // verificar si se cierra la comilla
        if (i < text.length && text[i] === ch) {
          elements.push(ch);
        }
      } else if (ch === "/" && i < text.length - 1 && text[i + 1] === "/") {
        // Si se encuentra una doble barra, es un comentario de línea, ignorarlo
        while (i < text.length && text[i] !== "\n") {
          i += 1;
        }
      } else if (ch === ":" && i < text.length - 1 && text[i + 1] === "=") {
        // Si se encuentra ':=', agrúpalo como un solo elemento
        elements.push(":=");
        i += 1; // Saltar al siguiente carácter después de '='
      } else if (ch === "=" && i < text.length - 1 && text[i + 1] === "=") {
        // si hay dos =, agruparlos
        elements.push("==");
        i += 1; // Saltar al siguiente carácter después de '='
      } else if (["=", "<", ">", "!"].includes(ch)) {
        // Agrupar operadores adicionales como ==, <, >, <=, >=, !=
        const operator = [ch];
        while (i < text.length - 1 && ["=", "<", ">"].includes(text[i + 1])) {
          operator.push(text[i + 1]);
          i += 1;
        }
        elements.push(operator.join(""));
      } else if (
        ["&", "|"].includes(ch) &&
        i < text.length - 1 &&
        text[i + 1] === ch
      ) {
        // Agrupar operadores lógicos &&, ||
        elements.push(ch + ch);
        i += 1; // Saltar al siguiente carácter después del segundo '&'
      } else if (
        ["+", "-"].includes(ch) &&
        i < text.length - 1 &&
        text[i + 1] === ch
      ) {
        // Agrupar operadores de incremento/decremento como ++, --
        elements.push(ch + ch);
        i += 1; // Saltar al siguiente carácter después del segundo '+'
      } else if (ch.match(/\d/)) {
        // Agrupar números
        const number = [ch];
        while (i < text.length - 1 && text[i + 1].match(/\d/)) {
          number.push(text[i + 1]);
          i += 1;
        }
        elements.push(number.join(""));
      }
    }

    i += 1;
  }

  // Eliminar espacios en blanco
  const filteredElements = elements.filter((elem) => elem.trim());

  // recorrer la lista, si hay dos =, agruparlos
  i = 0;
  while (i < filteredElements.length) {
    if (
      filteredElements[i] === "=" &&
      i < filteredElements.length - 1 &&
      filteredElements[i + 1] === "="
    ) {
      filteredElements[i] = "==";
      filteredElements.splice(i + 1, 1);
    }
    i += 1;
  }

  return filteredElements;
}
