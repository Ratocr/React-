import { Link} from 'react-router-dom'

function Inicio({produtos}) {
  return (
   <main>
    <h1>Lista de produtos disponiveis </h1>
    {produtos.map((produto)=>
    <article key={produto.id}>
        <img src={produto.imagem} alt={produto.nome} />
        <h1>{produto.nome}</h1>
        <p><strong>Preço: </strong>{produto.preco.toFixed(2)}</p>

        <Link to={`/produto/${produto.id}`}> Ver detalhes</Link>


    </article>)}
   </main>
  )
}

export default Inicio
