import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Library from './Library';
import Pokedex from './Pokedex';
// import PokemonPage from './PokemonPage';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        {/* <Route path="/pokemon">
          <PokemonPage />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
