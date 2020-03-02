import React, { useState } from 'react'

const Pokemon = () =>{
    const [value, setValue] = useState('')
    const [pokemonImg, setPokemonImg] = useState('')
    const [pokemonName, setPokemonName] = useState('')

    const changeValue =(e)=>{      
        setValue(e.target.value)
    }

        const addPokemon = (event) => {
            event.preventDefault()
            setPokemonName(value)
            const url = 'https://pokeapi.co/api/v2/pokemon/' + value
            fetch(url)
            .then (res=> res.json())
            .then(data => {
                setPokemonImg(data.sprites.front_default)
            })
            setValue('')
        }
    return (
        <div className="App">
        <header className="App-header">
          <h1> PRACTICANDO CON REACT  </h1>
          <form onSubmit={addPokemon}>
            <div class="input-field inline" style={{color: 'white'}}>
              <input id="pokemon" value={value} onChange={changeValue}/>
              <label for="pokemon"></label>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">
              BUSQUE SU POKEMON
            </button>
          </form>
          <img src={pokemonImg} alt={pokemonImg} width={300}></img>
          <h1>{pokemonName}</h1>
        </header>
      </div>
    );
}
export default Pokemon