import { Link } from "react-router-dom";
import "../css/PokemonCard.css";

export const PokemonCard = ({ pokemon }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  return (
    <li className="pokemon-card">
      <Link to={`/pokemon/${pokemon.id}`}>
        <h3 className="pokemon-name">{pokemon.name.toUpperCase()}</h3>
        <img
          className="pokemon-img"
          src={imgUrl}
          alt={pokemon.name}
        />
        <div className="stats">
          <p className="left-column">EXPERIENCE:</p>
          <p className="right-column"> {pokemon.base_experience}</p>
          <p className="left-column">HP:</p>
          <p className="right-column">{pokemon.stats[0].base_stat}</p>
          <p className="left-column">ATTACK:</p>
          <p className="right-column">{pokemon.stats[1].base_stat}</p>
          <p className="left-column">DEFENSE:</p>
          <p className="right-column">{pokemon.stats[2].base_stat}</p>
          <p className="left-column">SPECIAL ATTACK:</p>
          <p className="right-column">{pokemon.stats[3].base_stat}</p>
          <p className="left-column">SPECIAL DEFENSE:</p>
          <p className="right-column">{pokemon.stats[4].base_stat}</p>
          <p className="left-column">SPEED:</p>
          <p className="right-column">{pokemon.stats[5].base_stat}</p>
        </div>
        <div className="pokemon-types">
          <p className={pokemon.types[0]?.type.name}>
            {pokemon.types[0]?.type.name.charAt(0).toUpperCase() +
              pokemon.types[0]?.type.name.slice(1)}
          </p>
          {pokemon.types[1]?.type.name && pokemon.types[1]?.type.name !== "" ? (
            <p className={pokemon.types[1]?.type.name}>
              {pokemon.types[1]?.type.name.charAt(0).toUpperCase() +
                pokemon.types[1]?.type.name.slice(1)}
            </p>
          ) : null}
        </div>
      </Link>
    </li>
  );
};
