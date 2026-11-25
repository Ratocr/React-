

import { useState } from 'react'
function Card_Produto({produto}) {
 const [quantidade,setQuantidade] = useState (produto.quantidade)

 function aumentar(){
    setQuantidade(quantidade + 1)
 }

 function diminuir(){
  if(quantidade > 0){
    return setQuantidade(quantidade -1)
  }
 }


  return (
    <div>
    <h1>{produto.nome} </h1>
    <p>Quantidade:{quantidade}</p>
    <p>Categoria: {produto.categoria}</p>
    <button onClick={aumentar}>+</button>
    <button onClick= {diminuir}>-</button>
      
    </div>
  )
}

export default Card_Produto
