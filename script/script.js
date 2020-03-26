const calcDisplay = document.querySelector('#calc-screen');
const clearButton = document.querySelector('#clear-btn');
const deleteButton = document.querySelector('#delete-btn');
const equalButton = document.querySelector('#equal-sign');
//convert string to number for calculations
let calculationValue = 0;
let operandOne = 0;
let operandTwo = 0;
let operatorSign = "";

//Delete/Backspace button
deleteButton.addEventListener(`click`, function () {
    if (calcDisplay.innerText.length === 1) {
        calcDisplay.innerText = "0";
    } else {
        // let displayString = calcDisplay.innerText;
        calcDisplay.innerText = calcDisplay.innerText.slice(0, calcDisplay.innerText.length - 1);
    };
});

//Clear Button
clearButton.addEventListener('click', function () {
    let calculationValue = 0;
    let operandOne = 0;
    let operandTwo = 0;
    let operatorSign = "";
    calcDisplay.innerText = `0`;
});

// math operation functions
function sumTwoNums(operandOne, operandTwo) {
    return operandOne + operandTwo;
};

function subTwoNums(operandOne, operandTwo) {
    return operandOne - operandTwo;
};

function multTwoNums(operandOne, operandTwo) {
    return operandOne * operandTwo;
};

function divTwoNums(operandOne, operandTwo) {
    return Math.round(operandOne / operandTwo);
};

// Click a digit, update the screen and operandTwo
document.querySelector('#digit-wrapper').addEventListener('click', function (event) {

    if (calcDisplay.innerText == 0) {
        calcDisplay.innerText = event.target.innerText;
    } else {
        calcDisplay.innerText += event.target.innerText;
    }
});

// Click an operator, update operandOne and opperatorSign values
document.querySelector('#operator-wrapper').addEventListener('click', function (event) {
    if (event.target.innerText !== `=`) {
        operatorSign = event.target.innerText;
        operandOne = parseInt(calcDisplay.innerText);
        calcDisplay.innerText = "0";
    }
});


// Peform calculation when pressing equal
equalButton.addEventListener('click', function () {
    operandTwo = parseInt(calcDisplay.innerText);
    switch (operatorSign) {
        case `+`:
            calculationValue = sumTwoNums(operandOne, operandTwo);
            break;
        case `−`:
            calculationValue = subTwoNums(operandOne, operandTwo);
            break;
        case `×`:
            calculationValue = multTwoNums(operandOne, operandTwo);
            break;
        case `÷`:
            calculationValue = divTwoNums(operandOne, operandTwo);
            break;
    };
    operandOne = calculationValue;
    calcDisplay.innerText = calculationValue.toString();
});
