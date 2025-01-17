import { useState } from "react";
import "./styles.css";

export default function App() {
  //let count = 0;
  const [count, setCount] = useState(0); // Declare state variable for the count
  console.log("count before", count);

  const handleIncrementCount = () => {
    //setCount(count + 1);
    setCount((count) => count + 1);
    console.log("count after", count);
  };

  function handleDecrementCount() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleDecrementCount}>
          -
        </button>
        <button type="button" onClick={handleIncrementCount}>
          +
        </button>
      </div>
    </div>
  );
}
