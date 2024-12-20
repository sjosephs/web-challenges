console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

// Helper functions to show and hide error/success messages
function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

hideTosError(); // hide error message intitially
hideSuccessMessage(); // Initially hide success message

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  // Check if the TOS checkbox is checked
  if (!tosCheckbox.checked) {
    showTosError();
    hideSuccessMessage();
    return; // Early return to prevent further execution
  }
  // If TOS checkbox is checked, show success message and reset the form
  else hideTosError();
  showSuccessMessage();

  form.reset(); // Reset the form after submission

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

/*
// Add a change event listener to the TOS checkbox to toggle the error message
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
*/
