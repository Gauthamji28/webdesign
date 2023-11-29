let currentInput = '';
let currentOperator = '';
let result = 0;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '') {
        currentOperator = operator;
        result = parseFloat(currentInput);
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (currentInput !== '') {
        const inputValue = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                result += inputValue;
                break;
            case '-':
                result -= inputValue;
                break;
            case '*':
                result *= inputValue;
                break;
            case '/':
                result /= inputValue;
                break;
        }
        currentInput = result.toString();
        currentOperator = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    result = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput !== '' ? currentInput : result;
}



// ... (previous code)

// Attach event listeners to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText === '=') {
            calculate();
        } else if (buttonText === 'C') {
            clearDisplay();
        } else if (['+', '-', '*', '/'].includes(buttonText)) {
            appendOperator(buttonText);
        } else {
            appendNumber(buttonText);
        }
    });
});

// Initialize display
updateDisplay();
