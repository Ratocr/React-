
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function DetalhesRickAndMorty() {
  const [personagem, setPersonagem] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPersonagem(dados)
      })
  }, [id])

  if (!personagem) {
    return <p>Carregando...</p>
  }

  return (
    <main className="app">
      <header className="top">
        <span className="tag">Rick and Morty Wiki</span>
        <h1>Detalhes do personagem</h1>
      </header>

      <section className="detalhes">
        <article className="detalhes-card">

          <img
            src={personagem.image}
            alt={personagem.name}
          />

          <div className="detalhes-info">
            <h2>{personagem.name}</h2>

            <p><strong>Status:</strong> {personagem.status}</p>
            <p><strong>Espécie:</strong> {personagem.species}</p>
            <p><strong>Tipo:</strong> {personagem.type || "Não informado"}</p>
            <p><strong>Gênero:</strong> {personagem.gender}</p>
            <p><strong>Origem:</strong> {personagem.origin.name}</p>
            <p><strong>Localização:</strong> {personagem.location.name}</p>
          </div>

        </article>

        <Link className="voltar" to="/">
          Voltar para personagens
        </Link>
      </section>
    </main>
  )
}

export default DetalhesRickAndMorty
