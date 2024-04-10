function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const expression = document.getElementById('display').value;
    if (!expression) return;

    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid expression');
    }
}

function deleteLast() {
    var currentDisplay = document.getElementById('display').value;
    if (currentDisplay.length > 0) {
        document.getElementById('display').value = currentDisplay.slice(0, -1);
    }
}

// New function to handle key press
function handleKeyPress(key) {
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.' || key === ',') {
        appendToDisplay('.');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

// Adding event listener for keydown
document.addEventListener('keydown', function(event) {
    const key = event.key;
    handleKeyPress(key);
});
