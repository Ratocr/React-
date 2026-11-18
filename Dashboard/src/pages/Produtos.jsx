import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

function Produtos() {
    const produtos = [
        {
            id: 1,
            nome:"Tênis",
            preco:199.90,
        },
        {
            id: 2,
            nome:'Camiseta',
            preco: 79.90,
        },
        {
            id:3,
            nome:'Mochila',
            preco:149.90,
        },
    ]

  return (
    <main className="pagina-produtos">
        <Link className="voltar"
        to= '/dashboard'
        >
            <FiArrowLeft/>
            Voltar
        </Link>

        <h1>Produtos</h1>

        <section className="produtos">
            {produtos.map((produto)=> (
                <article key={produto.id}>
                    <h2>{produto.nome}</h2>
                    <p>
                        R$ {produto.preco.toFixed(2)}
                    </p>
                </article>
            ))}
        </section>
    </main>
  )
}

export default Produtos
