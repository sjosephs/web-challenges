import { add, subtract, multiply, divide } from "./index.js";

// Tests for Add()
test("add() returns 5 if called with add(2, 3)", () => {
  expect(add(2, 3)).toBe(5);
});

test("add() returns a negative value if the greater argument is negative", () => {
  expect(add(-4, 3)).toBeLessThan(0);
});

test("add() returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

// Test for subtract()
test("subtract() returns 10 if called with subtract(15, 5)", () => {
  expect(subtract(15, 5)).toBe(10);
});

test("subtract() returns a negative value if the second argument is greater than the first one", () => {
  expect(subtract(3, 10)).toBeLessThan(0);
});

//Test for multiply()
test("multiply() returns 8 if called with multiply(2, 4)", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("multiply() returns a negative value if only the first argument is negative", () => {
  expect(multiply(-3, 4)).toBeLessThan(0);
});

test("multiply() returns a negative value if only the second argument is negative", () => {
  expect(multiply(4, -8)).toBeLessThan(0);
});

test("multiply() returns a positive value if called with two negative arguments", () => {
  expect(multiply(-2, -3)).toBeGreaterThan(0);
});

// Test for divide()

test("divide() returns 3 if called with divide(9, 3)", () => {
  expect(divide(9, 3)).toBe(3);
});

test("divide() returns 'You should not do this!' if called with 0 as second argument", () => {
  expect(divide(3, 0)).toBe("You should not do this!");
});
