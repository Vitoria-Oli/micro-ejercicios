let number1 = prompt ("Primera cifra");
let number2 = prompt ("Sengunda cifra");

function sumNumbers() {
    let sumTotal = Number(number1) + Number(number2);
    alert(`La suma de ${number1} con ${number2} es ${sumTotal}`);
}
sumNumbers();