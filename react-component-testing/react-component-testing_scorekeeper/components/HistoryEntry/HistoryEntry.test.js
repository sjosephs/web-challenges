import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HistoryEntry from ".";

test("renders name of game and 'show score' button only", () => {
  render(
    <HistoryEntry
      nameOfGame="Dodelido"
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const nameOfGame = screen.getByText(/dodelido/i);
  const button = screen.getByRole("button", { name: /display more/i });

  expect(nameOfGame).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  // Ensures player names and scores are not visible initially.
  // const message = screen.queryByText("john" / i);
  // expect(message).not.toBeInTheDocument();
  // const message1 = screen.queryByText("jane" / i);
  // expect(message1).not.toBeInTheDocument();
  // const message2 = screen.queryByText(2);
  // expect(message2).not.toBeInTheDocument();
  // const message3 = screen.queryByText(1);
  // expect(message3).not.toBeInTheDocument();
});

// Ensures player names and scores are displayed after button click. toggles player names and scores visibility when clicking the button
test("renders player names and scores after button click", async () => {
  render(
    <HistoryEntry
      nameOfGame="Dodelido"
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const noPlayer1 = screen.queryByText(/john/i);
  const noPlayer2 = screen.queryByText(/jane/i);
  const noPlayerScore1 = screen.queryByText(/2/i);
  const noPlayerScore2 = screen.queryByText(/1/i);
  // Ensure player names and scores are NOT in the document initially
  expect(noPlayer1).not.toBeInTheDocument();
  expect(noPlayer2).not.toBeInTheDocument();
  expect(noPlayerScore1).not.toBeInTheDocument();
  expect(noPlayerScore2).not.toBeInTheDocument();

  const button = screen.getByRole("button", { name: /display more/i });
  // Click the "Show Score" button to reveal scores
  // Click again to hide scores

  await userEvent.click(button);

  const player1 = screen.getByText(/john/i);
  const player2 = screen.getByText(/jane/i);
  const playerScore1 = screen.getByText(/2/i);
  const playerScore2 = screen.getByText(/1/i);
  // Check if players' names and scores are now displayed
  expect(player1).toBeInTheDocument();
  expect(player2).toBeInTheDocument();
  expect(playerScore1).toBeInTheDocument();
  expect(playerScore2).toBeInTheDocument();
});
