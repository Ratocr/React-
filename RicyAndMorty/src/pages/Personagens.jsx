import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Personagens() {

    const [personagem, setPersonagem] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((resposta) => resposta.json())
            .then((dados) => {
                setPersonagem(dados.results)
            })
    }, [])

    return (
        <main className="app">
            <header className='top'>
                <span className='tag'>Rick and Morty Wiki</span>
                <h1>Glossário Rick and Morty</h1>
            </header>

            <section className='lista_ricks'>
                {personagem.map((personagem,index) => (
                    <article
                        className='rick-card'
                        key={personagem.name}
                    >
                        <img
                            src={personagem.image}
                            alt={personagem.name}
                        />
                        <h2>{personagem.name}</h2>

                  
                        <Link to={`/personagem/${personagem.id}`} className="verDetalhes">Ver detalhes</Link>
                    </article> 
                ))}
            </section> 
        </main>
    )
}

export default Personagens