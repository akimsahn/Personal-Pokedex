import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import pokeball from '../images/pokeball.png';
import openBall from '../images/pokeball-open.png';
import "./pokemonPage.css"

function PokemonPage({ pokedex, handlePokedex }) {
  const [spriteDirection, setSpriteDirection] = useState(true)
  const [pokemonFlavorText, setPokemonFlavorText] = useState([])
  const location = useLocation()
  const { pokemon } = location.state
  const isInPokedex = pokedex.some(item => item.id === pokemon.id)
 
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

  useEffect(() => {
      fetch(`${pokemon.species.url}`)
      .then(resp => resp.json())
      .then(data => setPokemonFlavorText(data.flavor_text_entries[6].flavor_text.replace("\f"," ")))
  }, [])

  const handleSprite = () => {
      setSpriteDirection(!spriteDirection)
  }

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        top: "160px",
        width: "100%",
        justifyContent: "center",
        gap: "5%"
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "600px",
        alignItems: "center"
        }}>
        <div>
          <img
            className="flavor-text"
            width="450px"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            style={{filter: "drop-shadow(2px 4px 12px black)"}}
          />
        </div>
        <div className="flavor-text">
          <p>{pokemonFlavorText}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          width: "450px",
          height: "500px",
        }}
      >
        <div className="stat-container-title" style={{marginLeft: "0"}}>
          <img  onClick={handleSprite} src={spriteDirection ? pokemon.sprites.front_default : pokemon.sprites.back_default} alt={pokemon.name} className="img-title"/>  
          <p style={{width: "180px", color: "black"}}>No. {pokemon.id}</p>
          <p>{pokemon.name}</p>
          <img id="pokeball" onClick={handleClick} src={isInPokedex ? pokeball : openBall} alt="pokeball" className="pokeball-title"/>
        </div>
        <div style={{display: "flex", width: "100%"}}>
          <div
            className="stats-left"
            style={{background: "#dbdbd9", textAlign: "center", lineHeight:"20px"}}
          >
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div className="stats-right" style={{background: "#ffffff", lineHeight:"20px"}}>
            <p>{pokemon.types[0].type.name} {pokemon.types[1] ? `/ ${pokemon.types[1].type.name}` : null}</p>
            <p>{(pokemon.height/10)} m</p>
            <p>{(pokemon.weight/10)} kg</p>
          </div>
        </div>
        <div className="base-stats" >
          <div>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[0].stat.name}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[1].stat.name}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[2].stat.name}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[3].stat.name}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[4].stat.name}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[5].stat.name}</p>   
          </div>
          <div>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[0].base_stat}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[1].base_stat}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[2].base_stat}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[3].base_stat}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[4].base_stat}</p>
              <p className="stats" style={{ lineHeight:"20px" }}>{pokemon.stats[5].base_stat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;