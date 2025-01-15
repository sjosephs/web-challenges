// export default function App() {
//   return <Greeting />;
// }

// function Greeting({ name = "World" }) {
//   return <h1>Hello, {name}!</h1>;
// }

// ### Create a Component with Props
// export default function App() {
//   return <Greeting name="World" />;
// }

// function Greeting({ name }) {
//   return <h1>Hello, {name}!</h1>;
// }

// Conditional Rendering with Props

// export default function App() {
//   return <Greeting name="df" />;
// }

// function Greeting({ name }) {
//   if (name === "Gimena" || name === "Klaus") {
//     return <h1>Hello, Coach!</h1>;
//   } else {
//     return <h1>Hello, {name}!</h1>;
//   }
// }

// export default function App() {
//   return <Greeting name="df" />;
// }

// function Greeting({ name }) {
//   const coach = ["Gimena", "Klaus"];
//   if (coach.includes(name)) {
//     return <h1>Hello, Coach!</h1>;
//   } else {
//     return <h1>Hello, {name}!</h1>;
//   }
// }

export default function App() {
  return <Greeting name="df" />;
}

function Greeting(props) {
  const coach = ["Gimena", "Klaus"];
  return <h1>Hello {coach.includes(props.name) ? "Coach" : props.name}</h1>;
}
