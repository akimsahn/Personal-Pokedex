import { usePokemon } from './PokemonContext'
import { Link } from 'react-router-dom';
import pokeball from '../images/pokeball.png';
import openBall from '../images/pokeball-open.png';

function PokemonCard({ pokemon }) {
    const { filteredPokedexPokemon, handlePokedex } = usePokemon()

    const isInPokedex = filteredPokedexPokemon.some(item => item.id === pokemon.id)

    function handleClick() {
        if (!isInPokedex) {
            const pokemonData = {...pokemon,
                nickname: ""
            }

            fetch('http://localhost:3001/pokemons', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pokemonData)
            })
            .then(res => res.json())
            .then(data => handlePokedex(data, ""))
        } else {
            handlePokedex(pokemon, "delete")
        }
    }

    return (
        <div className='card'>
            <Link to={{
                pathname: `/${pokemon.name}`,
                state: { 
                    pokemon
                }
            }}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} width="100px" />
            </Link>
            <img id="pokeball" onClick={handleClick} src={isInPokedex ? pokeball : openBall} alt="pokeball" />
            <h3>{pokemon.name}</h3>
        </div>
    )
}

export default PokemonCard;