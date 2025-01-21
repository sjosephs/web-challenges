import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      // fetches and sets the Pokémon list.
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]); // Dependency array ensures this runs when offset changes

  return (
    <main>
      <button
        type="button"
        onClick={() => setOffset(offset - 20)}
        disabled={offset === 0}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setOffset(offset + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

// explaination:
//onClick={() => setOffset(offset - 20)}: When clicked, it decreases the offset by 20, loading the previous set of Pokémon.

//disabled={offset === 0}: The button will be disabled (i.e., greyed out and not clickable) if offset is 0 (meaning you are on the first page).
