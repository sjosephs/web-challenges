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

// Create new function to hide abd show new Success message

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

hideTosError(); // Initially hide error message before it is submitted
hideSuccessMessage(); // Initially hide success message

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  // If checkbox = true, I want to be able to work with my form and
  // If check box = false do nothing

  // Check if the TOS checkbox is checked
  if (!tosCheckbox.checked) {
    // ! If checkbox = false
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

// Add a change event listener to the TOS checkbox to toggle the error message

// The message should disappear as soon as the user checks the checkboox - and it should reappear as soon as the user unchecks the checkbox.
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
