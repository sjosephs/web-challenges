import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      Article Component
      <h2 className="article__title">Welcome to Attributes</h2>
      <label htmlFor="input">Label for Input</label>
      <input id="input" type="text" />
      <a href="google.com" className="article__link">
        Link
      </a>
    </article>
  );
}
