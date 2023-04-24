let number1;
let number2;
let number3;
let div;

function app() {
    askToUser();
    printInScreen();
    biggestNumber();
}
function askToUser() {
  number1 = prompt("primer número");
  number2 = prompt("segundo número");
  number3 = prompt("tercer número");
}
function printInScreen() {
  div = document.getElementById("container");
}
function biggestNumber() {
  if (parseInt(number1) > parseInt(number2) && parseInt(number1) > parseInt(number3)) {
    div.innerHTML = `El número mayor entre ${number1} , ${number2} y ${number3} es ${number1}`;}
    if (parseInt(number1) > parseInt(number2)) {
        div.innerHTML = `El número mayor entre ${number1} , ${number2} y ${number3} es ${number2}`;}
       if  (parseInt(number2) > parseInt(number3)) {
            div.innerHTML = `El número mayor entre ${number1} , ${number2} y ${number3} es ${number3}`;}
}
app()

