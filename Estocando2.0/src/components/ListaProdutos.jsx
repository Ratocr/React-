import { useState } from "react";
import CardProduto from "./CardProduto";

function ListaProdutos({ produtos, excluir }) {
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");
  const [pesquisa, setPesquisa] = useState("");

  const produtosFiltrados = produtos
  .filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()))

    .filter((produto) => {
        if(categoriaFiltro === "Todas")
            return True
    })
  return <div></div>;
}

export default ListaProdutos;
