const h1 = document.querySelector('h1');
// const input1 = document.querySelector('#firstNumber');
// const input2 = document.querySelector('#secondNumber');
// const button = document.querySelector('#btnCalculate');
// const resultParagraph = document.querySelector('.result');
const form = document.querySelector('.form');
const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const button = document.querySelector('#btnCalculate');
const resultParagraph = document.querySelector('.result');

button.addEventListener('click', sumInputs);
form.addEventListener('submit', sumInputs);

function sumInputs(event) {
    event.preventDefault();
    console.log({event});
    result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    resultParagraph.innerText = "The sum between " + firstNumber.value + " and " + secondNumber.value + " is " + result;

    resultParagraph.style.display = "inline";

}