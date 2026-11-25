import { useState } from "react";
function Produtos({ adicionarProdutos, produtos }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");

  const produtoExistente = produtos.some(
    (produto) =>
      produto.nome.trim().toLowerCase() === nome.trim().toLowerCase(),
  );

  if (produtoExistente) {
    alert("Produto ja foi cadastrado");
    return;
  }

  if (!categoria) {
    alert("Selecione uma categoria");
    return;
  }

  const novoProduto = {
    nome: nome.trim(),
    categoria: categoria,
    quanridade: Number(categoria),
  };

  adicionarProdutos(novoProduto);

  setNome("");
  setCategoria("");
  setQuantidade("");

  return (
    <form>
      <label htmlFor="nome">Nome do produto</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
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
        <option value="Açúcares e adoçantes">Açúcares e adoçantes</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Carnes e aves">Carnes e aves</option>
        <option value="Cereais e grãos">Cereais e grãos</option>
        <option value="Condimentos e temperos">Condimentos e temperos</option>
        <option value="Congelados">Congelados</option>
        <option value="Conservas e enlatados">Conservas e enlatados</option>
        <option value="Frutas">Frutas</option>
        <option value="Frios e embutidos">Frios e embutidos</option>
        <option value="Hortaliças e verduras">Hortaliças e verduras</option>
        <option value="Laticínios e derivados">Laticínios e derivados</option>
        <option value="Massas e farináceos">Massas e farináceos</option>
        <option value="Ovos">Ovos</option>
        <option value="Padaria e confeitaria">Padaria e confeitaria</option>
        <option value="Peixes e frutos do mar">Peixes e frutos do mar</option>
        <option value="Outros">Outros</option>
      </select>

      <label htmlFor="quantidade">Quantidade</label>
      <input type="number"
      id="quantidade"
      value={quantidade}
      onChange={(e) => setQuantidade(e.target.value)} />

        <button type="submit">Cadastrar produto</button>

    </form>
    
  );
}

export default Produtos;
