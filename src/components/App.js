import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Library from './Library';
import Pokedex from './Pokedex';
import PokemonPage from './PokemonPage';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [inPokedex, setInPokedex] = useState([])
  
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
  pokemons.sort((a, b) => a.id - b.id)
    
  useEffect(() => {
    getPokemons()
  }, [])

  const displayInPokedex = pokemons.filter(pokemon => pokemon.inPokedex)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/library">
          <Library pokemons={pokemons} />
        </Route>
        <Route path="/pokedex">
          <Pokedex pokemons={displayInPokedex} />
        </Route>
        <Route path="/pokemon/:name">
          <PokemonPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
