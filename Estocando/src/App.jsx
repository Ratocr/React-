import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Inicio from "./pages/Inicio";
import Produtos from "./pages/Produtos";
import CadastrarProduto from "./pages/CadastrarProduto";

import "./App.css";

function App() {
  const [produtos, setProdutos] = useState([]);

  function adicionarProduto(novoProduto) {
    setProdutos([
      ...produtos,
      {
        ...novoProduto,
        id: Date.now(),
      },
    ]);
  }

  function deletarProduto(id) {
    const novaLista = produtos.filter(
      (produto) => produto.id !== id
    );

    setProdutos(novaLista);
  }

  function alterarQuantidade(id, valor) {
    setProdutos(
      produtos.map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: Math.max(0, produto.quantidade + valor),
          };
        }

        return produto;
      })
    );
  }

  return (
    <div className="app">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Inicio produtos={produtos} />}
        />

        <Route
          path="/produtos"
          element={
            <Produtos
              produtos={produtos}
              excluir={deletarProduto}
              alterarQuantidade={alterarQuantidade}
            />
          }
        />

        <Route
          path="/cadastrar"
          element={
            <CadastrarProduto
              produtos={produtos}
              adicionarProdutos={adicionarProduto}
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;