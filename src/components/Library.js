import React from "react";
import PokemonCard from "./PokemonCard";

function Library({ pokemons, onUpdatePokemon }) {
    return (
        <div>
            <h1>Pokemon Library</h1>
            <div className="cardContainer">
                {pokemons.map(pokemon => 
                    <PokemonCard key={pokemon.id} pokemon={pokemon} onUpdatePokemon={onUpdatePokemon} />
                )}
            </div>
        </div>
    )
}

export default Library;