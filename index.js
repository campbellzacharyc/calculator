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

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if(operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if(operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
};

function numberOne(buttonPressed) {
    if (buttonPressed.classList.contains(num)) {
        if (buttonPressed.classList.contains(one)) {
            firstNumber += "1";
        } else if (buttonPressed.classList.contains(two)) {
            firstNumber += "2";
        } else if (buttonPressed.classList.contains(three)) {
            firstNumber += "3";
        } else if (buttonPressed.classList.contains(four)) {
            firstNumber += "4";
        } else if (buttonPressed.classList.contains(five)) {
            firstNumber += "5";
        } else if (buttonPressed.classList.contains(six)) {
            firstNumber += "6";
        } else if (buttonPressed.classList.contains(seven)) {
            firstNumber += "7";
        } else if (buttonPressed.classList.contains(eight)) {
            firstNumber += "8";
        } else if (buttonPressed.classList.contains(nine)) {
            firstNumber += "9"
        } else if (buttonPressed.classList.contains(zero)) {
            firstNumber += "0";
        } else if (buttonPressed.classList.contains(doublezero)) {
            firstNumber += "00";
        }
    }
};

function operatorNum(buttonPressed) {
    if (buttonPressed.classList.contains(division)) {
        operator += "/";
    } else if (buttonPressed.classList.contains(multiplication)) {
        operator += "x";
    } else if (buttonPressed.classList.contains(addition)) {
        operator += "+";
    } else if (buttonPressed.classList.contains(subtraction)) {
        operator += "-";
    }
};

function numberTwo(buttonPressed) {
    if (buttonPressed.classList.contains(num)) {
        if (buttonPressed.classList.contains(one)) {
            secondNumber += "1";
        } else if (buttonPressed.classList.contains(two)) {
            secondNumber += "2";
        } else if (buttonPressed.classList.contains(three)) {
            secondNumber += "3";
        } else if (buttonPressed.classList.contains(four)) {
            secondNumber += "4";
        } else if (buttonPressed.classList.contains(five)) {
            secondNumber += "5";
        } else if (buttonPressed.classList.contains(six)) {
            secondNumber += "6";
        } else if (buttonPressed.classList.contains(seven)) {
            secondNumber += "7";
        } else if (buttonPressed.classList.contains(eight)) {
            secondNumber += "8";
        } else if (buttonPressed.classList.contains(nine)) {
            secondNumber += "9"
        } else if (buttonPressed.classList.contains(zero)) {
            secondNumber += "0";
        } else if (buttonPressed.classList.contains(doublezero)) {
            secondNumber += "00";
        }
    }
};

function operatorEquals(buttonPressed) {
    if (buttonPressed.classList.contains(equals)) {
        return "=";
    }
};

