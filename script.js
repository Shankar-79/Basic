// script.js

let display = document.getElementById("display");
let currentInput = "";
let currentOperation = null;
let firstOperand = null;
let memory = 0; // Memory variable to store the memory value
let isResultDisplayed = false; // Flag to track if a result is currently displayed

function appendNumber(number) {
    if (isResultDisplayed) {
        currentInput = "";
        isResultDisplayed = false;
    }

    currentInput += number;
    display.innerText = currentInput || '0';
}

function chooseOperation(operation) {
    if (currentInput === "") return;
    if (firstOperand !== null) {
        calculateResult();
    }
    firstOperand = parseFloat(currentInput);
    currentOperation = operation;
    currentInput = "";
    isResultDisplayed = false;
    display.innerText = operation;
}

function calculateResult() {
    if (currentInput === "" || firstOperand === null || currentOperation === null) return;

    let secondOperand = parseFloat(currentInput);
    let result = 0;

    switch (currentOperation) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    display.innerText = result;
    currentInput = result.toString();
    currentOperation = null;
    firstOperand = null;
    isResultDisplayed = true;
}

function clearDisplay() {
    currentInput = "";
    currentOperation = null;
    firstOperand = null;
    display.innerText = "0";
    isResultDisplayed = false;
}

function allClear() {
    clearDisplay();
    memory = 0;
}

function deleteLast() {
    if (currentInput !== "") {
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || "0";
    }
}

function memoryRecall() {
    currentInput = memory.toString();
    display.innerText = currentInput;
    isResultDisplayed = true;
}

function memoryAdd() {
    if (currentInput === "") return;
    memory += parseFloat(currentInput);
    currentInput = "";
    display.innerText = "0";
}

function calculatePercentage() {
    if (currentInput === "") return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    display.innerText = currentInput;
    isResultDisplayed = true;
}