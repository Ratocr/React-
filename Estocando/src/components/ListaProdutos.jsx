import { useState } from "react";
import CardProduto from "./CardProduto";

function ListaProdutos({ produtos, excluir, alterarQuantidade }) {
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");
  const [pesquisa, setPesquisa] = useState("");

  const produtosFiltrados = produtos
    .filter((produto) =>
      produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
    )
    .filter((produto) => {
      if (categoriaFiltro === "Todas") {
        return true;
      }

      return produto.categoria === categoriaFiltro;
    });

  return (
    <section className="card">
      <div className="subTitulo">
        <h2>Produtos cadastrados</h2>

        <div className="filtro">
          <label htmlFor="filtro-categoria">Filtrar:</label>

          <select
            id="filtro-categoria"
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Informática">Informática</option>
            <option value="Móveis">Móveis</option>
            <option value="Eletrônicos">Eletrônicos</option>
          </select>
        </div>
      </div>

      <input
        type="text"
        placeholder="Pesquisar produto"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />

      {produtos.length === 0 && (
        <p className="mensagem-vazia">
          Nenhum produto cadastrado.
        </p>
      )}

      {produtos.length > 0 && produtosFiltrados.length === 0 && (
        <p className="mensagem-vazia">
          Nenhum produto encontrado.
        </p>
      )}

      <div>
        {produtosFiltrados.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            excluir={excluir}
            alterarQuantidade={alterarQuantidade}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaProdutos;