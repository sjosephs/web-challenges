import { useState } from "react";
import "./styles.css";

export default function App() {
  // Using useState to manage isActive state
  //let isActive = false;
  const [isActive, setIsActive] = useState(false);

  // Handle click event to toggle isActive state
  function handleClick() {
    //  isActive = !isActive;
    // Check that the value changes correctly.

    setIsActive(!isActive); // Use the setState function to update the state
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      {/* <button onClick={handleClick}>Activate</button> */}
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}

// Hacker Bonus
//When you console.log(isActive) immediately after setIsActive(!isActive),
// it logs the previous state since the new state hasn't been applied yet.
