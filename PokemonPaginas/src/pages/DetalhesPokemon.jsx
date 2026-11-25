import { useEffect, useState } from "react"
import { Link,useParams } from "react-router-dom"

function DetalhesPokemon() {
    const {name} = useParams()
    const[pokemon, setPokemon] = useState(null)

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((respostas) => respostas.json())
        .then((dados) => {
            setPokemon(dados);
        });
    }, [name]);

    if (!pokemon){
        return <p>Carregando...</p>
    }

  return (
    <main className="detalhes">
        <Link to='/'>Voltar</Link>
        

        <h1>{pokemon.name}</h1>

        <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />

        <p>ID: {pokemon.id}</p>

        <p>Altura: {pokemon.height}</p>

        <p>Peso: {pokemon.weight}</p>

      <p>Experiência base: {pokemon.base_experience}</p>
    </main>
  )
}

export default DetalhesPokemon
