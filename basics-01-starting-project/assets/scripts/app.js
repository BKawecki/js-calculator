let currentResult = 0;
currentResult += 10;

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);


