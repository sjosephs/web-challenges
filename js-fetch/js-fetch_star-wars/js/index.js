import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.py4e.com/api/planets/1/",
  films: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.py4e.com/api/people/1/",
};

// Create dom element for a card and append it to the root
const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);

// Fetch data and render cards
async function fetchDataAndRender() {
  // --v-- your code below this line --v--
  //try {
  console.log("Fetching data...");
  const response = await fetch("https://swapi.py4e.com/api/people");
  console.log("Response received:", response);
  const data = await response.json();
  console.log("Data converted to JSON:", data); // Make sure there are results before proceeding

  // Use forEach to create and render a card for each character
  if (data.results) {
    data.results.forEach((character) => {
      const characterCard = Card(character);
      renderElement(characterCard);
    });
  }
}
// catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
fetchDataAndRender();
