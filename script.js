let firstNumber = '';
let operator = null;
let secondNumber = '';
let shouldResetDisplay = false;

const clearButton = document.querySelector('#clear');
const clear = function() {
    firstNumber = "";
    operator = null;
    secondNumber = "";
    updateDisplay();
};

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

const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');

const updateDisplay = function() {
    if (operator === null) {
        display.textContent = firstNumber;
    } else {
        display.textContent = secondNumber;
    }
};

const appendDigit = function(digit) {
    if (shouldResetDisplay === true) {
        firstNumber = "";
        shouldResetDisplay = false;
    }

    if (operator === null) {
        firstNumber = firstNumber + digit;
    } else {
        secondNumber = secondNumber + digit;
    }
    updateDisplay();
};

const chooseOperator = function(op) {
    if (firstNumber === "") return;
    if (secondNumber !== "") evaluate();
    operator = op;
    shouldResetDisplay = false;
};

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        chooseOperator(btn.textContent)
    });
});

digitButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        appendDigit(btn.textContent)
    });
});

const equalsButton = document.querySelector('#equals');

const evaluate = function() {
    if (operator === null || secondNumber === "") return;
    if (operator === '/' && secondNumber === '0') {
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
g
equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);



