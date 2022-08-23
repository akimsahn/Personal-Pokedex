import React from "react";
import PokemonCard from "./PokemonCard";

function Pokedex({ pokemons, onUpdatePokemon }) {
    return (
        <div>
            <h1>My Pokedex</h1>
            <div className="cardContainer">
                {pokemons.map(pokemon => 
                    <PokemonCard key={pokemon.id} pokemon={pokemon} onUpdatePokemon={onUpdatePokemon} />
                )}
            </div>
        </div>
    )
}

export default Pokedex;