let number1;
let number2;
let div;

function app() {
    askToUser();
    printInScreen();
    biggestNumber();
}
function askToUser() {
  number1 = prompt("Dame un número");
  number2 = prompt("Dame otro número");
}
function printInScreen() {
  div = document.getElementById("container");
}
function biggestNumber() {
  if (parseInt(number1) > parseInt(number2)) {
    div.innerHTML = `El número mayor entre ${number1} y ${number2} es ${number1}`;
  }else{
    div.innerHTML = `El número mayor entre ${number1} y ${number2} es ${number2}`;
  }
}
app()