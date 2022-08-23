import React from "react";
import { useParams } from 'react-router-dom';

function PokemonPage({ pokemons }) {

    const { id } = useParams()

    const displayPokemon = pokemons.filter(pokemon => {
        return pokemon.id === id ? pokemon : null})

    return (
        <div>
            {console.log(displayPokemon)}
        </div>
    )
}

export default PokemonPage;