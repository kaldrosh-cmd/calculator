// ZMIENNE STANU
let firstNumber = '';
let operator = null;
let secondNumber = '';
let shouldResetDisplay = false;

// ELEMENTY STRONY
const backspaceButton = document.querySelector('#backspace');
const decimalButton = document.querySelector('#decimal');
const clearButton = document.querySelector('#clear');
const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');

// FUNKCJE LICZACE
const add = function(x, y) {
    return x + y;
};
const subtract = function(x, y) {
    return x - y;
};
const multiply = function(x, y) {
    return x * y;
};
const divide = function(x, y) {
    return x / y;
};
const operate = function(op, x, y) {
    x = Number(x);
    y = Number(y);

    if (op === "+") {
        return add(x, y);
    }
    else if (op === "-") {
        return subtract(x, y);
    }
    else if (op === "*") {
        return multiply(x, y);
    }
    else if (op === "/") {
        return divide(x, y);
    }
};

// LOGIKA
const backspace = function () {
    if (operator === null) {
        firstNumber = firstNumber.slice(0, -1);
    } else {
        if (secondNumber === "") {
            return;
        }
        secondNumber = secondNumber.slice(0, -1);
    }
    updateDisplay();
};
const appendDecimal = function() {
    if (operator === null && firstNumber.includes('.')) return;
    if (secondNumber.includes('.')) return;
    if (operator === null && firstNumber === "") {appendDigit("0."); return;}
    if (operator !== null && secondNumber === "") {appendDigit("0."); return;}
    appendDigit('.');
};
const clear = function() {
    firstNumber = "";
    operator = null;
    secondNumber = "";
    shouldResetDisplay = false;
    updateDisplay();
};
const updateDisplay = function() {
    if (operator === null) {
        display.textContent = firstNumber;
    } else {
        display.textContent = secondNumber;
    }
};
const appendDigit = function(digit) {
    if (shouldResetDisplay) {
        firstNumber = "";
        shouldResetDisplay = false;
    }
    if (operator === null) {
        if (firstNumber === "0" && digit !== ".") {
            firstNumber = digit;
        } else {
            firstNumber = firstNumber + digit;
        }
    } else {
        if (secondNumber === "0" && digit !== ".") {
            secondNumber = digit;
        } else {
            secondNumber = secondNumber + digit;
        }
    }
    updateDisplay();
};
const chooseOperator = function(op) {
    if (firstNumber === "") return;
    if (secondNumber !== "") evaluate();
    operator = op;
    shouldResetDisplay = false;
};
const evaluate = function() {
    if (operator === null || secondNumber === "") return;
    if (operator === '/' && Number(secondNumber) === 0) {
        clear();
        display.textContent = 'Nice try 😏';
        return;
    }

    const result = Math.round(operate(operator, firstNumber, secondNumber) * 1000) / 1000;

    firstNumber = String(result);
    operator = null;
    secondNumber = "";
    shouldResetDisplay = true;
    updateDisplay();
};

// EVENT LISTENERY
equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
decimalButton.addEventListener('click', appendDecimal);
backspaceButton.addEventListener('click', backspace);
operatorButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        chooseOperator(btn.textContent);
    });
});
digitButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        appendDigit(btn.textContent);
    });
});



