export default function App() {
  return (
    <>
      <Button color="blue" disabled={false} text="Submit" />

      <Button color="red" disabled={false} text="Dont Submit" />
    </>
  );
}

function Button({ color, disabled, text }) {
  function handleClick(params) {
    console.log(`${text} button clicked!`);
  }
  return (
    <button
      style={{
        color,
        backgroundColor: "lightgreen",
        height: "100px",
        width: "100px",
      }}
      disabled={disabled}
      onClick={() => console.log(`${text} button clicked!`)}
    >
      {text}
    </button>
  );
}
