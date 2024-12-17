console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--

const titleOfBook = "JavaScript";
const authorOfBook = "Jonas";
let ratingOfBook = 4;
let numberOfCopiesSold = 79;

console.log("The Title of the Book is: ", titleOfBook);
console.log("The Author of the Book is: ", authorOfBook);
console.log("The Rating of the Book is: ", ratingOfBook);
console.log("The Number of Copies Sold is: ", numberOfCopiesSold);

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--

ratingOfBook = 5;
numberOfCopiesSold += 20;

console.log("\nAfter updates:");
console.log("The Title of the Book is: ", titleOfBook);
console.log("The Author of the Book is: ", authorOfBook);
console.log("The Rating of the Book is: ", ratingOfBook);
console.log("The Number of Copies Sold is: ", numberOfCopiesSold);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--

function logBookData() {
  console.log("The Title of the Book is: ", titleOfBook);
  console.log("The Author of the Book is: ", authorOfBook);
  console.log("The Rating of the Book is: ", ratingOfBook);
  console.log("The Number of Copies Sold is: ", numberOfCopiesSold);
}
logBookData();

console.log("\n After Updates");

numberOfCopiesSold += 10;
logBookData();

numberOfCopiesSold += 40;
logBookData();

// --^-- write your code here --^--
