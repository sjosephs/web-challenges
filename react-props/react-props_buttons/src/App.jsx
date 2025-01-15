export default function App() {
  return (
    <>
      <Button
        color="blue"
        disabled={false}
        text="Submit"
        onClick={() => alert("You clicked me!")}
      />

      <Button
        color="red"
        disabled={false}
        text="Dont Submit"
        onClick={() => alert("You clicked me!")}
      />
    </>
  );
}

function Button({
  color,
  disabled,
  text,
  onClick = () => console.log(`${text} clicked me`),
}) {
  return (
    <button
      style={{ color, height: "100px", width: "100px" }}
      onClick={onClick}
    >
      {text}
      {disabled}
    </button>
  );
}
