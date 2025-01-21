import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAddPeople() {
    setPeople(people + 1);
  }

  function handleDeletePeople() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        people={people}
        onAdd={handleAddPeople}
        onDelete={handleDeletePeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
