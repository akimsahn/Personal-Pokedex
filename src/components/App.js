import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Library from './Library';
import Pokedex from './Pokedex';
import PokemonPage from './PokemonPage';
import HomePage from './HomePage';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [inPokedex, setInPokedex] = useState([])
  
  const getPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
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
  pokemons.sort((a, b) => a.id - b.id)
    
  useEffect(() => {
    getPokemons()
    
    fetch('http://localhost:3001/pokemons')
    .then(res => res.json())
    .then(data => setInPokedex(data))
  }, [])

  function handlePokedex(updatedPokemon, mode) {
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

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route path="/library">
          <Library
            pokemons={pokemons}
            pokedex={inPokedex}
            handlePokedex={handlePokedex}
          />
        </Route>
        <Route path="/pokedex">
          <Pokedex
            pokemons={inPokedex}
            handlePokedex={handlePokedex}
          />
        </Route>
        <Route path="/pokemon/:name">
          <PokemonPage 
            pokedex={inPokedex}
            handlePokedex={handlePokedex}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
