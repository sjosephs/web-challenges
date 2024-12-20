console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  console.log("Event is:", event);

  // We grab all the information of the form.
  const formData = new FormData(event.target);
  console.log("Form Data is:", formData);

  // We convert the formData that we dont know how to work with, to an object that we know how to work with.
  const data = Object.fromEntries(formData);
  console.log("Data is:", data);

  //All my data object values are string so to work with the number I need to convert them

  const numberA = parseInt(data.numberA);
  const numberB = parseInt(data["numberB"]);

  console.log("numberA", numberA);

  // Depending on the operator selected, what function we need to call
  switch (data.operator) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtarction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      result = divide(numberA, numberB);
      break;
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
