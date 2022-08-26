import { useState } from "react";
import { usePokemon } from "./PokemonContext";
import PokedexList from "./PokedexList.js";
import SearchBar from "./SearchBar";

function Pokedex() {
    const { filteredPokedexPokemon, handlePokedexSearch } = usePokemon()
    const [isLibrary] = useState(false)

    return (
        <div className="main">
            <h1>My Pokédex</h1>
            <SearchBar isLibrary={isLibrary} handleSearch={handlePokedexSearch}/>
            <div className="cardContainer">
                {filteredPokedexPokemon.map(pokemon => 
                    <PokedexList
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                )}
            </div>
        </div>
    )
}

export default Pokedex;