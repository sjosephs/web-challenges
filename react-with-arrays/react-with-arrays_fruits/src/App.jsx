import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 Banana", color: "yellow" },
    { id: 2, name: "🍏 Apple", color: "green" },
    { id: 3, name: "🍎 Red Apple", color: "red" },
    { id: 4, name: "🍇 Grape", color: "purple" },
    { id: 5, name: "🍓 Strawberry", color: "red" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} /> // dynamically create a Card component for each fruit in the array.key prop to ensure unique keys for each Card.
      ))}
    </div>
  );
}
