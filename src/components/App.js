import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Library from './Library';
import Pokedex from './Pokedex';
import PokemonPage from './PokemonPage';

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemons')
    .then(res => res.json())
    .then(data => setPokemons(data))
  },[]);

  const displayInPokedex = pokemons.filter(pokemon => pokemon.inPokedex)

  function handleUpdate(item) {
    setPokemons(pokemons.map(pokemon => pokemon.id !== item.id ? pokemon : item))
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/library">
          <Library pokemons={pokemons} onUpdatePokemon={handleUpdate} />
        </Route>
        <Route path="/pokedex">
          <Pokedex pokemons={displayInPokedex} onUpdatePokemon={handleUpdate} />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonPage pokemon={pokemon}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
