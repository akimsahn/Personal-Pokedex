import React, {useState} from "react";
import { Link } from 'react-router-dom';

function ListPokedex({ pokemon, handlePokedex }) {
    const {id, name, image, hp, xp, nickname} = pokemon
    const [stateNickname, setStateNickname] = useState("")

    function handleClick() {
        fetch(`http://localhost:3001/pokemons/${id}`, {
            method: 'DELETE'
        })

        handlePokedex(pokemon, "delete")
    }

    function handleChange(e) {
        setStateNickname(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3001/pokemons/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...pokemon,
                nickname: stateNickname,
            })
        })
        .then(res => res.json())
        .then(data => handlePokedex(data, "replace"))
        setStateNickname("")
    }
    
    return (
        <div className='pokedex'>
            <h4><span>❤️{hp}</span><span>{xp} XP</span></h4>
            <Link to={{
                pathname: `/pokemon/${name}`,
                state: {
                    pokemon
                }
            }}>
                <img src={image} alt={name} width="100px" />
            </Link>
            <h3>{name}</h3>
            <h4>{nickname !== "" ? `"${nickname}"` : '--'}</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={stateNickname}
                    onChange={handleChange}
                    placeholder="Enter nickname"
                />
            </form>
            <button onClick={handleClick}>Remove from Pokedex</button>
        </div>
    )
}

function Pokedex({ pokemons, handlePokedex }) {
    return (
        <div className="main">
            <h1>My Pokedex</h1>
            <div className="cardContainer">
                {pokemons.map(pokemon => 
                    <ListPokedex
                        key={pokemon.id}
                        pokemon={pokemon}
                        handlePokedex={handlePokedex}
                    />
                )}
            </div>
        </div>
    )
}

export default Pokedex;