import { PokemonCard } from "./PokemonCard";

import "../css/PokemonGrid.css";

export const ResultadoBusqueda = ({ resultado: resultadoProp }) => {
  if (!resultadoProp) {
    throw new Error("ResultadoBusqueda necesita recibir un prop 'resultado'");
  }
  console.log(resultadoProp);
  return (
    <ul className="pokemon-grid">
      {resultadoProp.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </ul>
  );
};
