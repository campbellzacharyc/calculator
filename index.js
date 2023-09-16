function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

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
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        calculate()
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    })
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
}

function calculate() {
    previousValue = Number(previousValue);
    currentScreen = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "x"){
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber() {
    return Math.round(num + 100) / 1000;
}


















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

// function numberOne(buttonPressed) {
//     if (buttonPressed.classList.contains(num)) {
//         if (buttonPressed.classList.contains(one)) {
//             firstNumber += "1";
//         } else if (buttonPressed.classList.contains(two)) {
//             firstNumber += "2";
//         } else if (buttonPressed.classList.contains(three)) {
//             firstNumber += "3";
//         } else if (buttonPressed.classList.contains(four)) {
//             firstNumber += "4";
//         } else if (buttonPressed.classList.contains(five)) {
//             firstNumber += "5";
//         } else if (buttonPressed.classList.contains(six)) {
//             firstNumber += "6";
//         } else if (buttonPressed.classList.contains(seven)) {
//             firstNumber += "7";
//         } else if (buttonPressed.classList.contains(eight)) {
//             firstNumber += "8";
//         } else if (buttonPressed.classList.contains(nine)) {
//             firstNumber += "9"
//         } else if (buttonPressed.classList.contains(zero)) {
//             firstNumber += "0";
//         } else if (buttonPressed.classList.contains(doublezero)) {
//             firstNumber += "00";
//         }
//     }
// };

// function operatorNum(buttonPressed) {
//     if (buttonPressed.classList.contains(division)) {
//         operator += "/";
//     } else if (buttonPressed.classList.contains(multiplication)) {
//         operator += "x";
//     } else if (buttonPressed.classList.contains(addition)) {
//         operator += "+";
//     } else if (buttonPressed.classList.contains(subtraction)) {
//         operator += "-";
//     }
// };

// function numberTwo(buttonPressed) {
//     if (buttonPressed.classList.contains(num)) {
//         if (buttonPressed.classList.contains(one)) {
//             secondNumber += "1";
//         } else if (buttonPressed.classList.contains(two)) {
//             secondNumber += "2";
//         } else if (buttonPressed.classList.contains(three)) {
//             secondNumber += "3";
//         } else if (buttonPressed.classList.contains(four)) {
//             secondNumber += "4";
//         } else if (buttonPressed.classList.contains(five)) {
//             secondNumber += "5";
//         } else if (buttonPressed.classList.contains(six)) {
//             secondNumber += "6";
//         } else if (buttonPressed.classList.contains(seven)) {
//             secondNumber += "7";
//         } else if (buttonPressed.classList.contains(eight)) {
//             secondNumber += "8";
//         } else if (buttonPressed.classList.contains(nine)) {
//             secondNumber += "9"
//         } else if (buttonPressed.classList.contains(zero)) {
//             secondNumber += "0";
//         } else if (buttonPressed.classList.contains(doublezero)) {
//             secondNumber += "00";
//         }
//     }
// };

// function operatorEquals(buttonPressed) {
//     if (buttonPressed.classList.contains(equals)) {
//         return "=";
//     }
// };

