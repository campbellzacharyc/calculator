// function add(a, b) {
//     return a + b;
// };

// function subtract(a, b) {
//     return a - b;
// };

// function multiply(a, b) {
//     return a * b;
// };

// function divide(a, b) {
//     return a / b;
// };

let operator = "";
let previousValue = '';
let currentValue = '';

document.addEventListener('DOMContentLoaded', function(){
    // Store all components on HTML in our JS
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }));

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }));

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    });

    equal.addEventListener("click", function(){
        if (currentValue != '' && previousValue != '') {
            operate()
            previousScreen.textContent = '';
            if (previousValue.length <= 10) {
                currentScreen.textContent = previousValue;
            } else {
                currentScreen.textContent = previousValue.slice(0,10) + '...';
            }
        }
    });

    decimal.addEventListener("click", function(){
        addDecimal();
    });
});

function handleNumber(num) {
    if(currentValue.length <= 5){
        currentValue += num;
    }
};

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
};

function operate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "x"){
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }
    console.log(previousValue);

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
};

function roundNumber(num) {
    return Math.round(num * 1000 ) / 1000;
};

function addDecimal() {
    if(!currentValue.includes('.')) {
        currentValue += '.';
    }
};
















// function operate(firstNumber, operator, secondNumber) {
//     if (operator === "+") {
//         return add(firstNumber, secondNumber);
//     } else if(operator === "-") {
//         return subtract(firstNumber, secondNumber);
//     } else if(operator === "*") {
//         return multiply(firstNumber, secondNumber);
//     } else if (operator === "/") {
//         return divide(firstNumber, secondNumber);
//     }
// };