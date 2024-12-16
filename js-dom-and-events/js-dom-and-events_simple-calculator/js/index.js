console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
let result;
addButton.addEventListener("click", () => {
  result = operand1 + operand2;
  console.log("The Result of Addition is: ", result);
});

subtractButton.addEventListener("click", () => {
  result = operand1 - operand2;
  console.log("The Result of Subtraction is: ", result);
});

multiplyButton.addEventListener("click", () => {
  result = operand1 * operand2;
  console.log("The Result of Multiplication is: ", result);
});

divideButton.addEventListener("click", () => {
  result = operand1 / operand2;
  console.log("The Result of Division is: ", result);
});

exponentButton.addEventListener("click", () => {
  result = operand1 ** operand2;
  console.log("The Result of Exponention is: ", result);
});

moduloButton.addEventListener("click", () => {
  result = operand1 % operand2;
  console.log("The Result of Modulus is: ", result);
});

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const incrementButton = document.querySelector('[data-js="increase-by-one"]');
incrementButton.addEventListener("click", () => {
  operand1 = operand1 + 1;
  console.log(
    "The Result after increasing first Operand by one is: ",
    operand1
  );
});

const incrementByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
incrementByFiveButton.addEventListener("click", () => {
  operand1 = operand1 + 5;
  console.log(
    "The Result after increasing first Operand by five is: ",
    operand1
  );
});

const decrementByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
decrementByOneButton.addEventListener("click", () => {
  operand1 = operand1 - 1;
  console.log(
    "The Result after decreasing first Operand by one is: ",
    operand1
  );
});

const decrementByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
decrementByFiveButton.addEventListener("click", () => {
  operand1 = operand1 - 5;
  console.log(
    "The Result after decreasing first Operand by five is: ",
    operand1
  );
});

const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
multiplyByTwoButton.addEventListener("click", () => {
  operand1 = operand1 * 2;
  console.log(
    "The Result after multiplying first Operand by two is: ",
    operand1
  );
});

const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');
multiplyByTwoButton.addEventListener("click", () => {
  operand1 = operand1 / 2;
  console.log("The Result after dividing first Operand by two is: ", operand1);
});

// --^-- write your code here --^--
