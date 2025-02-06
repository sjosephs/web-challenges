import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
export const server = createServer((request, response) => {
  //   const firstname = chance.first();
  //   const lastname = chance.last();
  //   const age = chance.age();
  //   const profession = chance.profession();
  //   response.end(
  //     `Hello, my name is ${firstname} ${lastname} and I am ${age} years old. I am a ${profession}.`
  //   );
  // });

  // Generate random user data
  const user = {
    firstname: chance.first(),
    lastname: chance.last(),
    age: chance.age(),
    profession: chance.profession(),
  };

  // Set headers for JSON response
  response.writeHead(200, { "Content-Type": "application/json" });

  // Send JSON response
  response.end(JSON.stringify(user, null, 2)); // Pretty-print JSON
});
