import React from 'react'
import { Link } from 'react-router-dom'

function PokemonCard({ pokemon, onUpdatePokemon }) {
    const {id, name, sprites, inPokedex} = pokemon;

    function handleClick() {
        fetch(`http://localhost:3001/pokemons/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...pokemon,
                inPokedex: !inPokedex,
            })
        })
        .then(res => res.json())
        .then(data => onUpdatePokemon(data))
    }

    return (
        <div className='card'>
            <Link to={`/pokemon/${id}`}>
                <img src={sprites.other["official-artwork"]["front_default"]} alt="pokemon_pic" />
            </Link>
            <span id="add-button" onClick={handleClick}>{inPokedex ? '✖️' : '➕'}</span>
            <h3>{name}</h3>
        </div>
    )
}

export default PokemonCard;