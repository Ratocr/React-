function Resumo({
    adultos,
    infantis,
    totalIngresso,
    valorTotal,
    limparPedido
}) {
  return (
   <div className="resumo">
    <p>Adultos: {adultos}</p>
    <p>Infantis: {infantis}</p>
    <p>Total de ingressos: {totalIngresso}</p>

    <strong>
        Total: {valorTotal}
    </strong>

    <button onClick={limparPedido}>
        Limpar pedido
    </button>
   </div>
  )
}

export default Resumo
