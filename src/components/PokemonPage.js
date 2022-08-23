import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PokemonCard from "./PokemonCard";

function PokemonPage() {
    const [pokemon, setPokemon] = useState({
        name: "",
        hp: null,
        sprites: {
            front: "",
            back: ""
        },
        inPokedex: false,
        nickname: ""
    })

    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3001/pokemons/${id}`)
        .then(res => res.json())
        .then(data => setPokemon(data))
    }, [])

    return (
        <div>
            <PokemonCard pokemon={pokemon} />
        </div>
    )
}

export default PokemonPage;