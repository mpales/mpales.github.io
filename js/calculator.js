const calculator = {
  displayNumber: '0',
  operator: null,
  percent: null,
  firstNumber: null,
  waitingSecondNumber: false };

function updateDisplay(){
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator(){
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingSecondNumber = false;
}

function inputDigit(digit) {
  if (calculator.waitingSecondNumber && calculator.firstNumber === calculator.displayNumber){
    calculator.displayNumber = digit;
  }
  else {
    if (calculator.displayNumber === '0'){
      calculator.displayNumber = digit;
    }
    else {
    calculator.displayNumber += digit;
    }
  }
}

function inverseNumber() {
  if (calculator.displayNumber === '0'){
    return;
  }
  else {
    calculator.displayNumber = calculator.displayNumber * -1;
  }
}

function percentNumber() {
  if (calculator.displayNumber === '0'){
    return;
  }
else {
  calculator.displayNumber = calculator.displayNumber / 100;
  }
}

function handleOperator(operator) {
  if (!calculator.waitingSecondNumber){
    calculator.operator = operator;
    calculator.waitingSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
  }
  else {
    alert ("Operator Ready");
  }
}

function performCalculate() {
  if (calculator.firstNumber == null || calculator.operator == null){
    alert ("Please assign Operator");
    return;
  }
  let result = 0;
  if (calculator.operator === "x") {
    result = parseFloat(calculator.firstNumber) * parseFloat(calculator.displayNumber);
  }
  else if (calculator.operator === "/") {
    result = parseFloat(calculator.firstNumber) / parseFloat(calculator.displayNumber);
  }
  else if (calculator.operator === "+") {
    result = parseFloat(calculator.firstNumber) + parseFloat(calculator.displayNumber);
  }
  else {
    result = parseFloat(calculator.firstNumber) - parseFloat(calculator.displayNumber);
  }
  const history = {
         firstNumber: calculator.firstNumber,
         secondNumber: calculator.displayNumber,
         operator: calculator.operator,
         result: result
     }
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
}


const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('clear')){
      clearCalculator();
      updateDisplay();
      return;
    }
    if (target.classList.contains('negative')){
      inverseNumber();
      updateDisplay();
      return;
    }
    if (target.classList.contains('percent')){
      percentNumber();
      updateDisplay();
      return;
    }
    if (target.classList.contains('equals')){
      performCalculate();
      updateDisplay();
      return;
    }
    if (target.classList.contains('operator')){
      handleOperator(target.innerText);
      updateDisplay();
      return;
    }
    inputDigit(target.innerText);
    updateDisplay()
  });
}
