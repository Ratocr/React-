import { useState } from "react";

function Formulario({ adicionarProdutos, produtos }) {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");


    const produtoExistente = produtos.some(
      (produto) =>
        produto.nome.trim().toLowerCase() === nome.trim().toLowerCase()
    );

    if (produtoExistente) {
      alert("Este produto já foi adicionado!");
      return;
    }

    if (!categoria) {
      alert("Selecione uma categoria!");
      return;
    }

    const novoProduto = {
      nome: nome.trim(),
      categoria: categoria,
      quantidade: Number(quantidade),
    };

    adicionarProdutos(novoProduto);

    setNome("");
    setCategoria("");
    setQuantidade("");
  }

  return (
    <form className="formulario">
      <h2>Cadastrar produto</h2>

      <label htmlFor="nome">Nome do produto</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Ex.: Teclado"
        required
      />

      <label htmlFor="categoria">Categoria</label>
      <select
        id="categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      >
        <option value="">Selecione uma categoria</option>
        <option value="Informática">Informática</option>
        <option value="Móveis">Móveis</option>
        <option value="Eletrônicos">Eletrônicos</option>
      </select>

      <label htmlFor="quantidade">Quantidade</label>
      <input
        type="number"
        id="quantidade"
        min="0"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        placeholder="Ex.: 10"
        required
      />

      <button type="submit">Cadastrar produto</button>
    </form>
  );


export default Formulario;