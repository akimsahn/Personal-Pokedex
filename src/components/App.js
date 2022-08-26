import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Library from './Library';
import Pokedex from './Pokedex';
import PokemonPage from './PokemonPage';
import HomePage from './HomePage';


function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route exact path="/library">
          <Library />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex />
        </Route>
          <Route exact path="/:name">
            <PokemonPage />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
