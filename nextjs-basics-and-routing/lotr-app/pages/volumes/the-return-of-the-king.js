import { volumes } from "../../lib/data";
import Link from "next/link";

export default function Volume2() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

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
      <Link href={"/volumes/the-fellowship-of-the-ring"}>
        ← Previous Volume
      </Link>
      <Link href={"/volumes/the-two-towers"}>Next Volume →</Link>
    </>
  );
}
