console.clear();

const url = "https://swapi.py4e.com/api/people"; // This is the link to the Star Wars API where we can get information about Star Wars characters.

async function fetchData() {
  try {
    //This function will handle fetching data from the API.
    const response = await fetch(url); // Fetch data from the API
    const data = await response.json(); // Convert the response to JSON
    console.log(data); // Log the entire data object

    // Log different values of the data object
    console.log("First Person:", data.results[0]);
    console.log("First Person name:", data.results[0].name);

    // Bonus: Log the eye color of R2-D2
    const r2d2 = data.results.find((character) => character.name === "R2-D2");
    console.log("R2-D2 Eye Color is:", r2d2.eye_color);
  } catch (error) {
    console.error("Error is:", error);
  }
}
fetchData();
