import React from 'react'
import { Link } from 'react-router-dom'

function PokemonCard({ pokemon, onUpdatePokemon }) {
    // const {id, name, sprites, inPokedex} = pokemon;

    function handleClick() {
        fetch(`http://localhost:3001/pokemons/${pokemon.name}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...pokemon,
                inPokedex: !pokemon.inPokedex,
            })
        })
        .then(res => res.json())
        .then(data => onUpdatePokemon(data))
    }

    return (
        <div className='card'>
            <Link to={{
                pathname: `/pokemon/${pokemon.name}`,
                state: {
                    pokemon
                    }
                }}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </Link>
            <span id="add-button" onClick={handleClick}>{pokemon.inPokedex ? '✖️' : '➕'}</span>
            <h3>{pokemon.name}</h3>
        </div>
    )
}

export default PokemonCard;