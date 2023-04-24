let text = prompt("Escribe una frase");
let nText = text.length;
let i;

newFunction();

function newFunction() {
 for (i = 0; i < nText; i++) {
    if (text.substr(i, 1) === "a") {
        document.write(text.substr(i, 1));
        }
     }
 }
