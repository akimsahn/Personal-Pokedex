import { useState } from "react"
import { Link } from 'react-router-dom';
import { usePokemon } from './PokemonContext'


function PokedexList({ pokemon }) {
    const { handlePokedex } = usePokemon()
    const {id, name, sprites, stats, base_experience, nickname} = pokemon
    const [stateNickname, setStateNickname] = useState("")

    function handleClick() {
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
            <h4><span>❤️{stats[0].base_stat}</span><span>{base_experience} XP</span></h4>
            <Link to={{
                pathname: `/${name}`,
                state: {
                    pokemon
                }
            }}>
                <img src={sprites.front_default} alt={name} width="100px" />
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

export default PokedexList