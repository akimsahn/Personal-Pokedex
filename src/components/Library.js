import React from "react";
import PokemonCard from "./PokemonCard";

function Library({ pokemons, pokedex, handlePokedex }) {
    return (
        <div className="main">
            <h1>Pokemon Library</h1>
            <div className="cardContainer">
                {pokemons.map(pokemon => 
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        pokedex={pokedex}
                        handlePokedex={handlePokedex}
                    />
                )}
            </div>
        </div>
    )
}

export default Library;