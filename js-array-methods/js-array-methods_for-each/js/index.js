const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

const container = document.querySelector("body");

colors.forEach((color) => {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  container.appendChild(colorBox);
});

console.log("---------------- Task 2 ------------------");

// Select the container where the boxes will be added
// const container = document.querySelector("body");

// Function to render a single color box
function renderColorBox(color) {
  const colorBox = document.createElement("div"); // Create a new div
  colorBox.classList.add("color-box"); // Add the "color-box" class
  colorBox.style.backgroundColor = color; // Set the background color to the given color
  container.appendChild(colorBox); // Append the div to the container
}

colors.forEach(renderColorBox); // Use forEach with the function reference to create the color boxes
