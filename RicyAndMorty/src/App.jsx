import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [personagens,setPersonagens] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((resposta) => resposta.json())
    .then((dados)=> {
      setPersonagens(dados.results)
    })
  },[])

  return (
   <main className='app'>
    <header className='top'>
      <span className='tag'>Rick and Morty Wiki</span>

      <h1>Glossário Rick and Morty</h1>
    </header>

    <section className='lista_ricks'>
      {personagens.map((personagem,id)=>(
        <article
        className='rick-card'
        key ={personagem.id}
        >
          <img
          src={personagem.image}
          alt={personagem.name}
          />
          <h2>Nome: {personagem.name}</h2>
          <p>Status: {personagem.status}</p>
          <p>Espécie:{personagem.species}</p>
          <p>Tipo: {personagem.type}</p>
          <p>Gênero: {personagem.gender}</p>
          <p>Origem: {personagem.origin.name}</p>
          <p>Localizão atual: {personagem.location.name}</p>
        </article>
      ))}
    </section>
   </main>
  )
}

export default App
