function DetalhesFilme({ filme, fecharDetalhes }) {
  return (
    <section className="detalhes">
      <div className="detalhes-topo">
        <h2>Detalhes do Filme</h2>
        <button type="button" className="secundario" onClick={fecharDetalhes}>
          Fechar
        </button>
      </div>

      <p>
        Título: <strong>{filme.titulo}</strong>
      </p>
      <p>
        Gênero: <strong>{filme.genero}</strong>
      </p>
      <p>
        Status:
        <strong>
          {filme.assistido ? " Assistido" : " Quero assistir"}
        </strong>
      </p>
    </section>
  );
}

export default DetalhesFilme;
