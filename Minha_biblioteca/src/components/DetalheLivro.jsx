function DetalheLivro({livro,fecharDetalhes}) {
  return (
    <div className="detalhes">
        <div className="detalhes_topo">
            <h2>Detalhes do Livro</h2>
            <button type="button" className="secundario" onClick={fecharDetalhes}>
                Fechar
            </button>
        </div>
        <p>Titulo: <strong>{livro.titulo}</strong></p>
        <p>Autor: <strong>{livro.autor}</strong></p>
        <p>Categoria: <strong>{livro.categoria}</strong></p>
        <p>Status: <strong>{livro.lido ? 'Lido' : 'Quero ler'}</strong></p>

    </div>
  )
}

export default DetalheLivro
