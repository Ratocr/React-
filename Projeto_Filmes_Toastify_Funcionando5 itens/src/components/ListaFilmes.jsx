import Filme from "./Filme.jsx";

function ListaFilmes({ filmes, selecionarFilme, marcarComoAssistido }) {
  if (filmes.length === 0) {
    return <p className="lista-vazia">Nenhum filme encontrado.</p>;
  }

  return (
    <section className="lista-filmes">
      {filmes.map((filme) => {
        return (
          <Filme
            key={filme.id}
            filme={filme}
            selecionarFilme={selecionarFilme}
            marcarComoAssistido={marcarComoAssistido}
          />
        );
      })}
    </section>
  );
}

export default ListaFilmes;
