
import { useParams,Link} from 'react-router-dom'

function DetalhesDoProduto({produtos}) {
    const {id} = useParams()
    const produtosEncontrado = produtos.find((produto) => produto.id === Number(id))
    if(!produtosEncontrado){
        return <main>
            <h1>Produto não encontrado</h1>

            <Link to='/'>Voltar para o início</Link>
        </main>
    }
  return (
   <main>
    <img src={produtosEncontrado.imagem} alt={produtosEncontrado.nome} />
    <h1>{produtosEncontrado.nome}</h1>
    <p><strong>ID: </strong>{produtosEncontrado.id}</p>
    <p><strong>Preço: </strong>{produtosEncontrado.preco}</p>
    <p><strong>Categoria: </strong>{produtosEncontrado.categoria}</p>
    <p><strong>Descrição</strong>{produtosEncontrado.descricao}</p>

    <Link to='/'>Voltar </Link>
   </main>
  )
}

export default DetalhesDoProduto
