console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--

const titlePost = "My Journey";
const textContentOfPost =
  "This post describes my trips to different destinations in the World.";
let numberOfLikes = 300;
const userCreatedPost = "seeingthe world";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--

console.log("a title for the post: ", titlePost);
console.log("text content for the post: ", textContentOfPost);
console.log("the number of likes the post has received: ", numberOfLikes);
console.log("the user who created the post: ", userCreatedPost);
console.log("post has been reported: ", isReported);

numberOfLikes += 1;
console.log("Updated Count: ", numberOfLikes);

// --^-- write your code here --^--
