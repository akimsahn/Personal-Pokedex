import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Library from './Library';
import Pokedex from './Pokedex';
import PokemonPage from './PokemonPage';

function App() {
  const[pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=386")
    const data = await res.json()
    
    

    

    const createPokemonObject = (results)  => {
      results.map(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setPokemons(pokemons => [...pokemons, data])
        pokemons.sort((a, b) => a.id - b.id)
      })
    }
    
    createPokemonObject(data.results)
    }

    const renderPokemon = pokemons.map(pokemon => {
    return <PokemonPage 
                key = {pokemon.id}
                id = {pokemon.id}
                name = {pokemon.name}
                image = {pokemon.sprites.other["official-artwork"]}
                type = {pokemon.types[0].type.name}
              />
    })
    
    

  useEffect(() => {
  getPokemons()
  }, [])



  return (
    <div>
      {renderPokemon}
      {/* <NavBar />
      <Switch>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route> */}
        {/* <Route path="/pokemon">
          <PokemonPage />
        </Route> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
