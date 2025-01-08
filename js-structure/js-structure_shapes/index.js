import { Circle } from "./components/Circle/Circle.js";
import { Square } from "./components/Square/Square.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
// import { getRandomColor } from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
