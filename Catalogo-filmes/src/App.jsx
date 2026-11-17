import { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiSave, FiX } from "react-icons/fi";
import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [nota, setNota] = useState("");
  const [url, setUrl] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  const [filmes, setFilmes] = useState([
    {
      id: 1,
      titulo: "Interestelar",
      genero: "Ficção Científica, Aventura, Drama",
      ano: 2014,
      nota: 8.7,
      url: "https://www.themoviedb.org/t/p/w600_and_h900_face/tR1XVa5bxgdh2bRw2u0DzrgkO2l.jpg",
    },
    {
      id: 2,
      titulo: "Parasita",
      genero: "Suspense, Drama, Comédia",
      ano: 2019,
      nota: 9.7,
      url: "https://www.themoviedb.org/t/p/w600_and_h900_face/bNGW8zYA91VqTZfV3jnKHPEKKvB.jpg",
    },
  ]);

  function salvarFilme(event) {
    event.preventDefault();

   

    if (
      titulo.trim() === "" ||
      genero.trim() === "" ||
      nota === "" ||
      ano === ""
    ) {
      return;
    }

    if (editandoId !== null) {
      const filmesAtulizados = filmes.map((filme) => {
        if (filme.id === editandoId) {
          return {
            ...filme,
            titulo: titulo,
            genero: genero,
            ano:Number(ano),
            nota:Number(nota),
            url: url,
          };
        }
        return filme;
      });

      setFilmes(filmesAtulizados);
      setEditandoId(null);
      setTitulo("");
      setGenero("");
      setAno("");
      setNota("");
      setUrl("");
      return;
    }

    const novoFilme = {
      id: Date.now(),
      titulo: titulo,
      genero: genero,
      ano: Number(ano),
      nota: Number(nota),
      url: url,
    };

    setFilmes([...filmes, novoFilme]);

    setTitulo("");
    setGenero("");
    setAno("");
    setNota("");
    setUrl("");
  }

  function filmesApagados(id) {
    const filmesAtulizados = filmes.filter((filme) => filme.id !== id);

    setFilmes(filmesAtulizados);
  }

  function editarfilmes(filme) {
    setEditandoId(filme.id);
    setTitulo(filme.titulo);
    setGenero(filme.genero);
    setAno(filme.ano);
    setNota(filme.nota);
    setUrl(filme.url);
  }

  return (
    <main className="geral">
      <form onSubmit={salvarFilme}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Gênero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ano"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />

        <input
          type="text"
          placeholder="Nota"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
        />

        <input
          type="url"
          placeholder="Cole a URL da url aqui"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
      <section className="lista-filmes">
        {filmes.map((filme) => (
          <article key={filme.id}>
            <h1>{filme.titulo}</h1>
            <p>
              <strong>Gênero: </strong>
              {filme.genero}
            </p>
            <p>
              <strong>Ano: </strong>
              {filme.ano}
            </p>
            <p>
              <strong>Nota: </strong>
              {filme.nota}
            </p>
            <p>
              <img src={filme.url} alt={filme.titulo} />
            </p>

            <section className="botoes">
              <button type="button" onClick={() => editarfilmes(filme)}>
                <FiEdit2 /> Editar
              </button>

              <button type="button" onClick={() => filmesApagados(filme.id)}>
                <FiTrash2 /> Excluir
              </button>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
