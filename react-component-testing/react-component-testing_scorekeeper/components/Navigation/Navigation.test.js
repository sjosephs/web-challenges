import { render, screen } from "@testing-library/react";
import Navigation from ".";

// We mock useRouter() to return { pathname: "/" } so that the component thinks it's on the home page.
// Mocks the router to avoid actual routing issues.
jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: "pathname" }; // Mocking the router's pathname
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />); //render(<Navigation />) renders the navigation component.

  // Check if the "Play" link is in the document
  const playLink = screen.getByRole("link", { name: "Play" });
  expect(playLink).toBeInTheDocument();
  expect(playLink).toHaveAttribute("href", "/"); // Verifies both presence and correct attributes of links.

  // Check if the "History" link is in the document
  const historyLink = screen.getByRole("link", { name: "History" });
  expect(historyLink).toBeInTheDocument();
  expect(historyLink).toHaveAttribute("href", "/history");
});

// Uses screen.getByRole("link", { name: /history/i }) to find the "History" link.
//Ensures the element exists.
//Checks that the link points to /history.
