import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();
  render(
    <input
      name="Name"
      labelText="LabelText"
      placeholder="Name of Player"
      value="Bernd"
      onChange={handleChange}
      required
    />
  );
  const input = screen.getByLabelText("LabelText");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "Name");
  expect(input).toHaveAttribute("placeholder", "Name of Player");
  expect(input).toHaveAttribute("value", "Bernd");
  expect(input).toHaveAttribute("id", "Name");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();
  render(
    <input
      name="Name"
      labelText="LabelText"
      placeholder="Name of Player"
      value="Bernd"
      onChange={handleChange}
      required
    />
  );
  const input = screen.getByLabelText("LabelText");
  expect(input).toBeInTheDocument();

  await user.type(input, "John");
  expect(handleChange).toHaveBeenCalledTimes(4);
});
