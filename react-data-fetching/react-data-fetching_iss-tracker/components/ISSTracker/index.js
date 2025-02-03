//import { useEffect, useState } from "react";
import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// export default function ISSTracker() {
//   const [coords, setCoords] = useState({
//     longitude: 0,
//     latitude: 0,
//   });

//   async function getISSCoords() {
//     try {
//       const response = await fetch(URL);
//       if (response.ok) {
//         const data = await response.json();
//         setCoords({ longitude: data.longitude, latitude: data.latitude });
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       getISSCoords();
//     }, 5000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

const fetcher = (url) => fetch(url).then((res) => res.json());

// Alternate solution:

// const fetcher = async (url) => {
//   const res = await fetch(url);
//   if (!res.ok) {
//     const error = new Error("An error occurred while fetching the data.");
//     // Attach extra info to the error object.
//     error.info = await res.json();
//     error.status = res.status;
//     throw error;
//   }

//   return res.json();
// };

export default function ISSTracker() {
  const {
    data: coords,
    error,
    isLoading,
    mutate,
  } = useSWR(`https://api.wheretheiss.at/v1/satellites/25544`, fetcher, {
    refreshInterval: 5000,
  });

  //console.log(coords);
  //console.log(data);

  // Alternative Solution
  // function useCoords() {
  //   const { data, error, isLoading } = useSWR(URL, fetcher, {
  //     refreshInterval: 5000,
  //   });

  //   return {
  //     coords: data,
  //     isLoading,
  //     error,
  //   };
  // }

  // const { coords, isLoading, error } = useCoords();

  if (error) return <p>Failed to load ISS coordinates</p>;
  if (isLoading || !coords) return <p>Loading...</p>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()} // Re-fetch data when clicking refresh
      />
    </main>
  );
}
