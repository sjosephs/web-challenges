console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/
/*
let currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

console.log("Your current age is: " + currentAge);

const daysLived = currentAge * 365;
const remainingDays = 80 - currentAge * 365;
const percentageLived = (daysLived * 100) / (daysLived + remainingDays);
const sleepFraction = 8 / 24;
const daysSpentSleeping = daysLived * sleepFraction;

console.log("You have lived approximately " + daysLived + " days.");
console.log(
  "You have an estimated " +
    remainingDays +
    " days remaining, assuming an average lifespan of " +
    80 +
    " years."
);
console.log(
  "You have lived about " +
    percentageLived.toFixed(2) +
    "% of your expected life."
);
console.log(
  "You have spent approximately " +
    daysSpentSleeping.toFixed(2) +
    " days sleeping."
);
*/
const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

// Log the user's current age
console.log("Your current age is: " + currentAge);

// Constants
const averageLifeSpan = 80; // Average lifespan in years
const daysInYear = 365; // Number of days in a year
const sleepHoursPerDay = 8; // Average hours of sleep per day
const sleepFraction = sleepHoursPerDay / 24; // Fraction of a day spent sleeping

// Calculations
const daysLived = currentAge * daysInYear; // Total days lived
const daysRemaining = (averageLifeSpan - currentAge) * daysInYear; // Estimated remaining days
const percentageLived = (currentAge / averageLifeSpan) * 100; // Percentage of life lived
const daysSpentSleeping = daysLived * sleepFraction; // Total days spent sleeping

// Log results with descriptive messages
console.log("You have lived approximately " + daysLived + " days.");
console.log(
  "You have an estimated " +
    daysRemaining +
    " days remaining, assuming an average lifespan of " +
    averageLifeSpan +
    " years."
);
console.log(
  "You have lived about " +
    percentageLived.toFixed(2) +
    "% of your expected life."
);
console.log(
  "You have spent approximately " +
    daysSpentSleeping.toFixed(2) +
    " days sleeping."
);
