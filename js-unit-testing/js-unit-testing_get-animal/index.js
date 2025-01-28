export function getAnimal(name) {
  if (name === "cats") {
    return "I totally love cats!";
  } else if (!name) {
    return "I do not like animals at all!";
  } else return `I like ${name}!`;
}
