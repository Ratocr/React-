function Livro({livro,selecionarLivro,marcarComoLido}) {
  return (
   <article className="livro">
    <div>
        <h3>{livro.titulo}</h3>
        <p>Autor: <strong>{livro.autor}</strong></p>
        <p>Categoria: <strong>{livro.categoria}</strong></p>
        <p>Status: <strong>{livro.lido? "Lido" : "Quero ler" }</strong></p>
    </div>

    <div className="acoes">
        <button
        type="button"
        onClick={() => {
            selecionarLivro(livro.id)
        }}
        >
            Ver Detalhes
        </button>
        {!livro.lido &&(
        <button
        type="button"
        className="secundario"
        onClick={() => {
            marcarComoLido(livro.id)
        }}
        >
            Marcar como lido
        </button>
        )}
    </div>
   </article>
  )
}

export default Livro
