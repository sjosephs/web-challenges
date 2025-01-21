import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  // Function to add a new animal
  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);
    setAnimals([...animals, { id: uid(), ...newAnimal }]); // to add the submitted animal to the existing state. Generate a unique ID for each new animal to ensure unique keys.Spread operator: Add the new animal to the end of the existing
    console.log(uid);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
