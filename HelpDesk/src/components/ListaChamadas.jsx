
import CardChamados from './CardChamados'


function ListaChamadas({chamados,setIdSelecionado}) {
  return (
  <section className="lista_chamdos">
    <h2>Lista Chamados</h2>
      <p>Gerencie e acompanhe os chamados de suporte</p>

      {chamados.length === 0 && <p> Nenhum chamado encontrado</p>}

      {chamados.map ((chamado)=>
      <CardChamados 
      key={chamado.id}
      chamado={chamado}
      onVerDetalhes={setIdSelecionado}
      />
      )}

  </section>
  )
}

export default ListaChamadas
