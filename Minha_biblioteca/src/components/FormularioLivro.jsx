function FormularioLivro({
  titulo,
  setTitulo,
  autor,
  setAutor,
  categoria,
  setCategoria,
  adicionarLivros,
}) {
  return (
    <form className="formulario" onSubmit={adicionarLivros}>
      <div className="campo">
        <label htmlFor="titulo">Titulo</label>
        <input
          id="titulo"
          type="text"
          placeholder="Digite o título do livro"
          value={titulo}
          onChange={(event) => {
            setTitulo(event.target.value);
          }}
        />

        <label htmlFor="autor">Autor</label>
        <input
          id="autor"
          type="text"
          placeholder="Digite o nome do autor"
          value={autor}
          onChange={(event) => {
            setAutor(event.target.value);
          }}
        />

        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(event) => {
            setCategoria(event.target.value);
          }}
        >
          <option value="" disabled>
            Selecione uma categoria
          </option>
          <option value="arte-e-fotografia">Arte e fotografia</option>
          <option value="autoajuda">Autoajuda</option>
          <option value="aventura">Aventura</option>
          <option value="biografia">Biografia</option>
          <option value="ciencias">Ciências</option>
          <option value="classico">Clássico</option>
          <option value="comedia">Comédia</option>
          <option value="contos">Contos</option>
          <option value="cronicas">Crônicas</option>
          <option value="desenvolvimento-pessoal">
            Desenvolvimento pessoal
          </option>
          <option value="direito">Direito</option>
          <option value="drama">Drama</option>
          <option value="distopia">Distopia</option>
          <option value="educacao">Educação</option>
          <option value="engenharia">Engenharia</option>
          <option value="esportes">Esportes</option>
          <option value="fantasia">Fantasia</option>
          <option value="ficcao-cientifica">Ficção científica</option>
          <option value="ficcao-historica">Ficção histórica</option>
          <option value="gastronomia">Gastronomia</option>
          <option value="hq-e-manga">HQ e mangá</option>
          <option value="historia">História</option>
          <option value="infantil">Infantil</option>
          <option value="infantojuvenil">Infantojuvenil</option>
          <option value="investigacao-policial">Investigação policial</option>
          <option value="literatura-brasileira">Literatura brasileira</option>
          <option value="literatura-erotica">Literatura erótica</option>
          <option value="literatura-estrangeira">Literatura estrangeira</option>
          <option value="matematica">Matemática</option>
          <option value="medicina">Medicina</option>
          <option value="meio-ambiente">Meio ambiente</option>
          <option value="militar">Militar</option>
          <option value="mitologia">Mitologia</option>
          <option value="misterio">Mistério</option>
          <option value="negocios-e-economia">Negócios e economia</option>
          <option value="poesia">Poesia</option>
          <option value="politica">Política</option>
          <option value="psicologia">Psicologia</option>
          <option value="programacao">Programação</option>
          <option value="religiao">Religião</option>
          <option value="religiao-e-espiritualidade">
            Religião e espiritualidade
          </option>
          <option value="romance">Romance</option>
          <option value="saude-e-bem-estar">Saúde e bem-estar</option>
          <option value="suspense">Suspense</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="terror">Terror</option>
          <option value="viagem">Viagem</option>
          <option value="western">Western</option>
          <option value="outros">Outros</option>
        </select>
      </div>

      <button type="submit">Adicionar livro</button>
    </form>
  );
}

export default FormularioLivro;
