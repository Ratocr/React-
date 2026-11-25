function CardProduto({ produto, excluir, alterarQuantidade }) {

  function estatusEstoque() {
    if (produto.quantidade === 0) {
      return <span className="estoque-vazio">Sem estoque</span>;
    }

    if (produto.quantidade <= 5) {
      return <span className="estoque-baixo">Estoque baixo</span>;
    }

    return <span className="estoque-normal">Estoque normal</span>;
  }

  return (
    <div className="produto">
      <div>
        <h3>{produto.nome}</h3>
        <p>Categoria: {produto.categoria}</p>
        <p>Quantidade: {produto.quantidade}</p>

        <div className="status-estoque">
          {estatusEstoque()}
        </div>
      </div>

      <div className="controle">
        <button
          onClick={() => alterarQuantidade(produto.id, -1)}
        >
          -
        </button>

        <button
          onClick={() => alterarQuantidade(produto.id, 1)}
        >
          +
        </button>

        <button
          onClick={() => excluir(produto.id)}
          className="btn-excluir"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default CardProduto;