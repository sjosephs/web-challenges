import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  //The getISSCoords function fetches the ISS data from the URL and updates the coords state with the new longitude and latitude.
  async function getISSCoords() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("Data:", data);
    setCoords({ longitude: data.longitude, latitude: data.latitude });
    console.log(setCoords);
  }
  // Use useEffect to set an interval
  useEffect(() => {
    const intervalId = setInterval(getISSCoords, 5000); //updates the ISS coordinates every 5 seconds

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId); //To prevent multiple timers from running simultaneously, return a cleanup function from your `useEffect` that calls `clearInterval` with the interval ID.
  }, []); //// Ensure that the interval is set up only on the first render of the app. Empty dependency array to run only once

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}

//    return: This statement is inside the useEffect hook and defines the cleanup function.

// () =>: This represents an arrow function.

// clearInterval(intervalId): This is the specific task performed during cleanup. It clears or stops the interval set earlier.
