// BUTTONS ON THE PAGE
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

// TODO make references to all the proper HTML elements you'll be using to display elements to the user
let displayNum1 = document.querySelector('#first-number');
let displayNum2= document.querySelector('#second-number');
let displayOperator = document.querySelector('#operator');
let displayResults = document.querySelector('#result');

// TODO make variables to keep track of the 1st number, operator, 2nd number, and the result of the math.
var num1 = "";
var num1Assignment;
var operator;
var num2 = "";
var num2Assignment;
var result;


for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', clickNumber);
}
for(let i = 0; i < operatorButtons.length; i++) { 
  operatorButtons[i].addEventListener('click', clickOperator);
}

equalButton.addEventListener('click', clickEqualButton);
clearButton.addEventListener('click', clickClearButton);


function clickNumber(event) {
  num1Assignment = event.target.value;
  displayNum1 = num1 += num1Assignment  
  
 num2Assignment = event.target.value;
  displayNum2 = num2 += num2Assignment;
  
  document.querySelector('#first-number').textContent = displayNum1;
  document.querySelector('#second-number').textContent = displayNum2;
}
  
if(displayNum1 < -1 &&  displayNum1 > 9 && displayOperator == "+, -, *, /, ^") {
  displayNum2 = "";
}


function clickOperator(event) {
  operator = event.target.value;
  displayOperator = "" + operator;

  document.querySelector('#operator').textContent = displayOperator;

  if(operator == 'plus') {
    result = num1 + num2;
  } else if(operator == 'minus') {
    result = num1 - num2;
  } else if(operator  == 'multiply') {
    result = num1 * num2
  } else if(operator == 'divide') {
    result = num1/num2;
  } else if(operator == 'power') {
    result = num1 ** num2;
  } 
}

function clickEqualButton() {
  displayResults = parseFloat(result);
  }
  
function clickClearButton() {
  displayNum1 = "";
  displayNum2 = "";
  displayOperator = "";
  displayResults = "";
  num1 = "";
  num2 = "";
  document.querySelector('#first-number').textContent = displayNum1;
  document.querySelector('#second-number').textContent = displayNum2;
  document.querySelector('#operator').textContent = displayOperator;
  document.querySelector('#result').textContent = displayResults;
}




