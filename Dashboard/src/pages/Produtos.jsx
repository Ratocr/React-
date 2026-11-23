import { Link } from "react-router-dom";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

function Produtos() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Tênis",
      preco: 199.9,
      categoria: 'vestuario'
    },
    {
      id: 2,
      nome: "Camiseta",
      preco: 79.9,
      categoria: 'vestuario'
    },
    {
      id: 3,
      nome: "Mochila",
      preco: 149.9,
      categoria: 'mala'
    },
  ]);

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  function iniciarEdicao(produto) {
    setEditandoId(produto.id);
    setNome(produto.nome);
    setPreco(String(produto.preco));
    setCategoria(produto.categoria || "");
  }

  
  function adicionarProduto(event) {
    event.preventDefault();

    if (!nome.trim() || !preco || Number(preco) < 0 || !categoria.trim()) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    if (editandoId !== null) {
      const listaAtualizada = produtos.map((produto) =>
        produto.id === editandoId
          ? {
              ...produto,
              nome: nome.trim(),
              preco: Number(preco),
              categoria: categoria.trim(),
            }
          : produto,
      );

      setProdutos(listaAtualizada);
      setEditandoId(null);
    } else {
      const novoProduto = {
        id: Date.now(),
        nome: nome.trim(),
        preco: Number(preco),
        categoria: categoria.trim(),
      };

      setProdutos([...produtos, novoProduto]);
    }

    setNome("");
    setCategoria("");
    setPreco("");
  }

  function deletarProduto(id) {
    const listaAtualizada = produtos.filter((produto) => produto.id !== id);
    setProdutos(listaAtualizada);
  }

  return (
    <main className="pagina-produtos">
      <Link className="voltar" to="/dashboard">
        <FiArrowLeft />
        Voltar
      </Link>

      <h1>Produtos</h1>

      <form action="" className="form-produto" onSubmit={adicionarProduto}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Preço do produto"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <input
          type="text"
          placeholder="Catégoria do produto"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <section className="produtos">
        {produtos.map((produto) => (
          <article key={produto.id}>
            <h2>{produto.nome}</h2>
            <p> Categoria: {produto.categoria}</p>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <div className="acoes">
              <button type="button" onClick={() => iniciarEdicao(produto)}>
                Editar
              </button>
              <button type="button" onClick={() => deletarProduto(produto.id)}>
                Excluir
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Produtos;
