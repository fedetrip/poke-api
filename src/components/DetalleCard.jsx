import { Link, useParams } from "react-router-dom";
import { get } from "../utils/conexionAPI";
import { useState, useEffect } from "react";

export const DetalleCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();
  const [species, setSpecies] = useState(null);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    get(`pokemon/${id}`).then((data) => {
      setPokemon(data);
      console.log(data);
    });
  }, [id]);

  useEffect(() => {
    get(`pokemon-species/${id}`).then((result) => {
      setSpecies(result);
    });
  }, [id]);

  console.log(species);

  const speciesDesc = species?.flavor_text_entries
    ?.filter((entry) => entry?.language?.name === "en")
    .map((entry) => entry?.flavor_text);

  useEffect(() => {
    if (pokemon) {
      get(`ability/${pokemon.abilities[0].ability.name}`).then((data) => {
        console.log(data);
      });
      setAbilities(pokemon.abilities.map((ability) => ability.ability.name));
    }
  }, [pokemon]);

  if (!pokemon) return null;

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <>
      {!pokemon || !species || abilities.length === 0 ? (
        <div className="cargando">cargando...</div>
      ) : (
        <div className="flex">
          <div className="pokemon-data container">
            <img
              className="data-img"
              src={imgUrl}
              alt={pokemon.name}
            />
            <p className="data-name">{pokemon.name}</p>

            <div className="data-specs stats">
              {/* <p className="left-column">ID:</p>
                    <p className="right-column">{pokemon.id}</p> */}
              <p className="left-column">Hp:</p>
              <p className="right-column">{pokemon.stats[0].base_stat}</p>
              <p className="left-column">Base Experience:</p>
              <p className="right-column">{pokemon.base_experience}</p>

              <p className="left-column">Height:</p>
              <p className="right-column"> {pokemon.height}m</p>
              <p className="left-column">Weight:</p>
              <p className="right-column">{pokemon.weight}k</p>

              <p className="left-column">Habitat:</p>
              <p className="right-column">{species?.habitat?.name}</p>

              <p className="left-column">Shape:</p>
              <p className="right-column">{species?.shape?.name}</p>

              <p className="left-column">Attack:</p>
              <p className="right-column">{pokemon.stats[1].base_stat}</p>

              <p className="left-column">Defense:</p>
              <p className="right-column">{pokemon.stats[2].base_stat}</p>

              <p className="left-column">Sp. Attack:</p>
              <p className="right-column">{pokemon.stats[3].base_stat}</p>

              <p className="left-column">Sp. Defense:</p>
              <p className="right-column">{pokemon.stats[4].base_stat}</p>

              <p className="left-column">Speed:</p>
              <p className="right-column">{pokemon.stats[5].base_stat}</p>
            </div>
            <div className="data-types">
              {pokemon.types.map((type) => (
                <p
                  key={type.type.name}
                  className={type.type.name}
                >
                  {type.type.name}
                </p>
              ))}
            </div>
            <ul className="data-desc">
              <li className="">
                Abilities:{" "}
                {pokemon.abilities
                  .map((ability) => ability.ability.name)
                  .join(", ")}
              </li>
              <br />
              <li>{speciesDesc[7]}</li>
              <li>{speciesDesc[12]}</li>
            </ul>

            <Link
              to="/"
              className="pokemon-back"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
