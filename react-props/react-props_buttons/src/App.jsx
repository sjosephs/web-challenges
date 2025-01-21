export default function App() {
  function handleClick(text) {
    console.log(`${text} clicked me`);
  }
  return (
    <>
      <Button
        color="blue"
        disabled={false}
        text="Submit"
        onClick={() => handleClick("Submit")}
      />

      <Button
        color="red"
        disabled={false}
        text="Dont Submit"
        onClick={() => handleClick("Dont Submit")}
      />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ color, height: "100px", width: "100px" }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
