import { createServer } from "node:http";
import { request } from "node:https";

export const server = createServer((request, response) => {
  response.end("Hello Sylvia");
});
