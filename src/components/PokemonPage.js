import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import PokemonCard from "./PokemonCard";

function PokemonPage() {
    const location = useLocation()
    const { pokemon } = location.state
g

    return (
        <div>
            <div>
                <img src={pokemon.sprites.other["official-artwork"]["front_default"]} alt={pokemon.name}/>
                <p>No. {pokemon.id}</p>
                <p>{pokemon.name}</p>
            </div>
            <div>
                <p>Type: {pokemon.types[0].type.name}</p>
                <p>Height: {(pokemon.height/10)} m</p>
                <p>Weight: {(pokemon.weight/10)} kg</p>
            </div> 
            <div>  
                <p>Hp: {pokemon.stats[0].base_stat}</p>
                <p>Attack: {pokemon.stats[1].base_stat}</p>
                <p>Defense: {pokemon.stats[2].base_stat}</p>
                <p>Sp. Attack: {pokemon.stats[3].base_stat}</p>
                <p>Sp. Defense: {pokemon.stats[4].base_stat}</p>
                <p>Speed: {pokemon.stats[5].base_stat}</p>             
            </div>
        </div>
    )
}

export default PokemonPage;