import { useState } from "react"

function CardProduto(produtos) {
    function estatusEstoque(){
        if(produtos.quantidade < 5){
            return <span>Estoque baixo</span>
        }
        if(produtos.quantidade === 0){
            return <span>Sem estoque</span>
        }
        else{
            return <span>Estoque normal</span>
        }
    }

    const[quantidade,setQuantidade] = useState

    function aumentar(){
        setQuantidade(quantidade + 1)
    }

    function diminuir(){
        if(quantidade> 0 ){
            setQuantidade(quantidade - 1)
        }
    }

    function deletar() {
   excluir(produtos.nome);
}


  return (
   <main>
    <h2>{produtos.nome}</h2>
    <p><strong>Categoria: </strong>{produtos.categoria}</p>
    <p><strong>Quantidade: </strong>{produtos.quantidade}</p>

    {estatusEstoque()}

    <button onClick={aumentar}> + </button>
    <button onClick={diminuir}> - </button>
    <button onClick={deletar} className="btn-excluir">Excluir</button>

   
   </main>
  )
}

export default CardProduto
