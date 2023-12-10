import { separateElements } from "./utils.js";
import { initializeGrammar } from "./grammar.js";
import Verifier from "./verifier.js";

const verifier = new Verifier();

document.addEventListener("DOMContentLoaded", function () {
  const forms = document.getElementsByTagName("form");
  const verifierForm = forms[0];

  const history = document.getElementById("history");

  function addTextToHistory(text) {
    const p = document.createElement("p");
    p.innerText = text;
    history.innerHTML = "";
    history.appendChild(p);
  }

  verifierForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const initialGrammar = initializeGrammar();
    const code = e.target[0].value;
    verifier.logs = "";

    // console.log(initialGrammar.toString());
    const response = verifier.verify(code, initialGrammar, 0);

    let msg = response ? "El código es válido" : "El código no es válido";

    msg += `\n\n${verifier.logs}`;
    if (response) {
      addTextToHistory(msg);
    } else {
      addTextToHistory(msg);
    }

    const separatedElements = separateElements(e.target[0].value);
    console.log(separatedElements);
    // console.log(verifier.logs);
  });
});
