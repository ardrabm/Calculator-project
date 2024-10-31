// Get references to the display and buttons
const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

// Initialize variables
let currentInput = '';
let operator = '';
let firstOperand = null;

// Function to update the display
function updateDisplay(value) {
    display.innerText = value;
}

// Function to handle button clicks
function handleButtonClick(value) {
    // If an operator is pressed, save the first operand and the operator
    if (['+', '-', 'x', '÷', '%', 'x²'].includes(value)) {
        if (currentInput === '') return; // Prevent operator entry without a number
        if (operator !== '') calculate(); // Calculate if operator already set

        firstOperand = parseFloat(currentInput);
        operator = value;
        currentInput = ''; // Reset current input
    } else if (value === '=') {
        if (currentInput === '') return; // Prevent equal without a number
        calculate();
        operator = ''; // Reset operator
    } else if (value === 'AC') {
        clear();
    } else {
        // Update current input with button value
        currentInput += value;
        updateDisplay(currentInput);
    }
}

// Function to perform calculations
function calculate() {
    let result;

    const secondOperand = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case 'x':
            result = firstOperand * secondOperand;
            break;
        case '÷':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
        case 'x²':
            result = firstOperand ** 2; // Square the first operand
            break;
        default:
            return;
    }

    // Update display with result and reset current input
    updateDisplay(result);
    currentInput = result.toString();
}

// Function to clear the calculator
function clear() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateDisplay('0');
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.innerText));
});

// Initialize display
updateDisplay('0');
