function FormularioFilme({
  titulo,
  setTitulo,
  genero,
  setGenero,
  adicionarFilme,
}) {
  return (
    <form className="formulario" onSubmit={adicionarFilme}>
      <div className="campo">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          placeholder="Digite o título do filme"
          value={titulo}
          onChange={(event) => {
            setTitulo(event.target.value);
          }}
        />
      </div>

      <div className="campo">
        <label htmlFor="genero">Gênero</label>
        <input
          id="genero"
          type="text"
          placeholder="Ex.: Ação"
          value={genero}
          onChange={(event) => {
            setGenero(event.target.value);
          }}
        />
      </div>

      <button type="submit">Adicionar filme</button>
    </form>
  );
}

export default FormularioFilme;
