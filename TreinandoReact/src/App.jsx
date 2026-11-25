import { useState } from "react";
import "./App.css";
import Card_Produto from "./components/Card_Produto";

function App() {
  const produtos = [
    { nome: "Mouse", quantidade: 8, categoria: "Informática" },
    {
      nome: "Teclado",
      quantidade: 3,
      categoria: "Informática",
    },
    {
      nome: "Monitor",
      quantidade: 20,
      categoria: "Eletrônicos",
    },
    {
      nome: "Webcam",
      quantidade: 12,
      categoria: "Eletrônicos",
    },
  ];

  const [pesquisa, setPesquisa] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");
  const produtosFiltrados = produtos.filter((produto) => {
    return (
      produto.nome.toLowerCase().includes(pesquisa.toLowerCase()) &&
      (categoriaFiltro === "Todas" || produto.categoria === categoriaFiltro)
    );
  });

  return (
    <div>
      {produtosFiltrados.map((produto, index) => (
        <Card_Produto key={index} produto={produto} />
      ))}

 
      
      <button onClick={() => setCategoriaFiltro("Informática")}>
        Informática
      </button>

      <button onClick={() => setCategoriaFiltro("Eletrônicos")}>
        Eletrônicos
      </button>

      <button onClick={() => setCategoriaFiltro("Todas")}>Todas</button>
      
      <input value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
      {pesquisa !== "" && <h1>Você esta pesquisando: {pesquisa} </h1>}

           {produtosFiltrados.length=== 0 &&
      <p>Nenhum produto encontrado</p>}

    </div>
  );
}

export default App;
