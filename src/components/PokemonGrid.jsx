import { PokemonCard } from "./PokemonCard";
import { useEffect, useState } from "react";
import { getAllData } from "../utils/getAllData";
import "../css/PokemonGrid.css";

export const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllData("pokemon?limit=150&offset=0").then((data) => {
      setPokemons(data);
      // console.log(data);
    });
  }, []);

  return (
    <ul className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </ul>
  );
};
