import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click Me!</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
