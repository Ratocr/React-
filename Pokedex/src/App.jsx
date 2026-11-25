import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((resposta) => resposta.json())
    .then((dados) => {
      setPokemons(dados.results)
    })
  },[])

  return (
    <main className='app'>
      <header className='top'>
        <span className='tag'>PokéAPI + React</span>

        <h1>Mini Pokédex</h1>

        <p>Pokémon carregados por uma API externa</p>
      </header>

      <section className='lista-pokemons'>
        {pokemons.map((pokemon, index) => (
          <article
          className='pokemon-card'
          key={pokemon.name}
          >
            <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            alt={pokemon.name}
            />

            <h2>{pokemon.name}</h2>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
