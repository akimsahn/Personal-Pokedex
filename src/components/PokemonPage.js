import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import "./pokemonPage.css"


function PokemonPage() {
    const [spriteDirection, setSpriteDirection] = useState(true)
    const location = useLocation()
    const { pokemon } = location.state

    const handleSprite = () => {
        setSpriteDirection(!spriteDirection)
    }

    return (
        <div
            style={{
            zIndex: "10",
            position: "fixed",
            display: "flex",
            top: "0",
            left: "0",
            width: "100%",
            height: "110%",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            }}
        >
      <div>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          style={{filter: "drop-shadow(2px 4px 12px black)"}}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          width: "450px",
          height: "500px",
        }}
        >
        <div className="stat-container-title" style={{marginLeft: "0"}}>
        <img  onClick={handleSprite} src={spriteDirection ? pokemon.sprites.front_default : pokemon.sprites.back_default} alt={pokemon.name} className="img-title"/>  
          <p style={{width: "180px", color: "black"}}>No. {pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>
        <div style={{display: "flex", width: "100%"}}>
          <div
            className="stats-left"
            style={{background: "#dbdbd9", textAlign: "center", lineHeight:"30px"}}
          >
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div className="stats-right" style={{background: "#ffffff", lineHeight:"30px"}}>
            <p>{pokemon.types[0].type.name} {pokemon.types[1] ? `/ ${pokemon.types[1].type.name}` : null}</p>
            <p>{(pokemon.height/10)} m</p>
            <p>{(pokemon.weight/10)} kg</p>
          </div>
        </div>
        <div className="base-stats" >
          <div>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[0].stat.name}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[1].stat.name}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[2].stat.name}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[3].stat.name}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[4].stat.name}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[5].stat.name}</p>   
          </div>
          <div>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[0].base_stat}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[1].base_stat}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[2].base_stat}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[3].base_stat}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[4].base_stat}</p>
              <p className="stats" style={{ lineHeight:"30px" }}>{pokemon.stats[5].base_stat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;