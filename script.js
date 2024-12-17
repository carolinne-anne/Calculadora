
// Variáveis para armazenar o valor e operação
let currentNumber = '';
let previousNumber = '';
let operation = '';

// Adiciona número ao display
function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

// Define a operação
function setOperation(op) {
    if (currentNumber === '') return;
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

// Calcula o resultado
function calculate() {
    if (previousNumber === '' || currentNumber === '') return;

    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = '';
    previousNumber = '';
    updateDisplay();
}

// Limpa o display
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    updateDisplay();
}

// Atualiza o display
function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}