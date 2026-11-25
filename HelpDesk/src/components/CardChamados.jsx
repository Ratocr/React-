
function CardChamados({chamado,onVerDetalher}) {

  return (
<div className="card_chamado">
  <h2>{chamado.titulo}</h2>
  <p><strong>Categoria: </strong> {chamado.categoria}</p>
  <p>{chamado.descricao}</p>
  <span className="status">{chamado.status === 'aberto'? 'Aberto' : 'Fechado' }</span>
</div>
  )
}

export default CardChamados
