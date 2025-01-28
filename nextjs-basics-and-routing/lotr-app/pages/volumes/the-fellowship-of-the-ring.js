import { volumes } from "../../lib/data";
import Link from "next/link";

export default function Volume1() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <h2>Books in the Volume</h2>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Link href={"/volumes/the-two-towers"}>Next Volume →</Link>
    </>
  );
}
