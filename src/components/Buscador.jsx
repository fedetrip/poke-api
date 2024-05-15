import { useState, useEffect } from "react";
import "../css/Buscador.css";
import { getAllData } from "../utils/getAllData";
import { Loading } from "./Loading";

import { PokemonCard } from "../components/PokemonCard";

export const Buscador = () => {
  const [buscador, setBuscador] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllData("pokemon?limit=540&offset=0").then((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, []);

  //   filtrado
  let resultado = [];
  if (!buscador) {
    resultado = pokemons;
  } else {
    const busquedaNombre = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(buscador.toLowerCase());
    });
    const busquedaType = pokemons.filter((pokemon) => {
      return pokemon.types.some((tipo) =>
        tipo.type.name.toLowerCase().includes(buscador.toLowerCase())
      );
    });
    const busquedaId = pokemons.filter((pokemon) => {
      return pokemon.id.toString().includes(buscador);
    });
    resultado = [...busquedaNombre, ...busquedaType, ...busquedaId];
    resultado = Array.from(
      new Set(resultado.map((pokemon) => pokemon.name))
    ).map((name) => {
      return pokemons.find((pokemon) => pokemon.name === name);
    });
  }

  const ShowGrid = () => {
    return (
      <ul className="pokemon-grid container">
        {resultado.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </ul>
    );
  };

  const handleChange = (event) => {
    setBuscador(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form
          className="form"
          onSubmit={handleSubmit}
        >
          <h2>Gotta catch 'em all</h2>
          <input
            className="input"
            type="text"
            value={buscador}
            onChange={handleChange}
            placeholder="Search your favorite Pokémon"
          />
        </form>
      )}
      {<ShowGrid />}
    </>
  );
};
