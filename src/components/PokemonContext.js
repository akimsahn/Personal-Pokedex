import React, { useContext, useState, useEffect } from "react";

// create the context
const PokemonContext = React.createContext()

// create custom hook
function usePokemon() {
    return useContext(PokemonContext)
}

// create a provider component
function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([])
  const [inPokedex, setInPokedex] = useState([])
  const [searchedPokemon, setSearchedPokemon] = useState('')

  
    const getPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=386")
    const data = await res.json()

        const createPokemonObject = (results) => {
        results.map(async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data = await res.json()
            setPokemons(pokemons => [...pokemons, data])
        })
        }
    
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getPokemons()
        
        fetch('http://localhost:3001/pokemons')
        .then(res => res.json())
        .then(data => setInPokedex(data))
     }, [])
 

  const handlePokedex = (updatedPokemon, mode) => {
    if (mode === "delete") {
    fetch(`http://localhost:3001/pokemons/${updatedPokemon.id}`, {
            method: 'DELETE'
    })
    setInPokedex(inPokedex.filter(pokemon => pokemon.id !== updatedPokemon.id ? pokemon : null))
    } else if (mode === "replace") {
    setInPokedex(inPokedex.map(pokemon => pokemon.id !== updatedPokemon.id ? pokemon : updatedPokemon))
    } else {
    setInPokedex([...inPokedex, updatedPokemon])
    }
  }

  const handleSearch = (e) => {
    setSearchedPokemon(e.target.value)
  }

  const handlePokedexSearch = (e) => {
    setSearchedPokemon(e.target.value)
  }

  let filteredPokemon = pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase()))
  
  let filteredPokedexPokemon = inPokedex.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase()))

    
  filteredPokemon.sort((a, b) => a.id - b.id)
  filteredPokedexPokemon.sort((a, b) => a.id - b.id)


  return <PokemonContext.Provider value={{filteredPokemon, handleSearch, filteredPokedexPokemon, handlePokedexSearch, handlePokedex}}>
            {children}
        </PokemonContext.Provider>;
}

export { PokemonProvider, usePokemon };

















// import { createContext, useState } from 'react';

// //create a context, with createContext api
// export const allPokemonContext = createContext();

// const allPokemon = (props) => {
//         // this state will be shared with all components 
//     const [allPokemon, setAllPokemon] = useState();

//     return (
//                 // this is the provider providing state
//         <allPokemonContext.Provider value={[allPokemon, setAllPokemon]}>
//             {props.pokemon}
//         </allPokemonContext.Provider>
//     );
// };

// export default allPokemon;