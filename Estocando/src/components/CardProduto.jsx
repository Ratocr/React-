import { useState } from "react";

function CardProduto({ produto,excluir }) {
  const [quantidade, setQuantidade] = useState(produto.quantidade);

    function estatusEstoque(){
      if(quantidade === 0){
        return <span className="estoque-vazio">Sem estoque </span>
      
      }

      if(quantidade <= 5 ){
        return <span className="estoque-baixo">Estoque baixo</span>
      }
    }

    function deletar(){
      excluir(produto.nome)
    }

  function aumentar() {
    setQuantidade(quantidade + 1);
  }

  function diminuir() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  return (
    <div className="produto">
      <div>
        <h3>{produto.nome}</h3>
        <p>Categoria: {produto.categoria}</p>
        <p>Quantidade:{quantidade}</p>
      
      
      <div className="status-estoque">
          {estatusEstoque()}
        </div>

      </div>

      <div className="controle">
        <button onClick={diminuir}>
          - 
        </button>

        <button onClick={aumentar}>
          + 
        </button>

        <button onClick={deletar} className="btn-excluir">
          Excluir
        </button>
      </div>
    </div>
  );
}

export default CardProduto;