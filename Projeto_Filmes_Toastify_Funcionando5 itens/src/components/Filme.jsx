function Filme({ filme, selecionarFilme, marcarComoAssistido }) {
  return (
    <article className="filme">
      <div>
        <h3>{filme.titulo}</h3>
        <p>
          Gênero: <strong>{filme.genero}</strong>
        </p>
        <p>
          Status:
          <strong>
            {filme.assistido ? " Assistido" : " Quero assistir"}
          </strong>
        </p>
      </div>

      <div className="acoes">
        <button
          type="button"
          onClick={() => {
            selecionarFilme(filme.id);
          }}
        >
          Ver detalhes
        </button>

        {!filme.assistido && (
          <button
            type="button"
            className="secundario"
            onClick={() => {
              marcarComoAssistido(filme.id);
            }}
          >
            Marcar como assistido
          </button>
        )}
      </div>
    </article>
  );
}

export default Filme;
