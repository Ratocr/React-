import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import FormularioFilme from "./components/FormularioFilme.jsx";
import Filtros from "./components/Filtros.jsx";
import ListaFilmes from "./components/ListaFilmes.jsx";
import DetalhesFilme from "./components/DetalhesFilme.jsx";
import "./App.css";

const CHAVE_FILMES = "projeto-filmes-toastify-v2";

const FILMES_PADRAO = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficção científica",
    assistido: false,
  },
  {
    id: 2,
    titulo: "Batman",
    genero: "Ação",
    assistido: true,
  },
  {
    id: 3,
    titulo: "Toy Story",
    genero: "Animação",
    assistido: false,
  },
];

function carregarFilmes() {
  const filmesSalvos = localStorage.getItem(CHAVE_FILMES);

  if (!filmesSalvos) {
    return FILMES_PADRAO;
  }

  try {
    const dadosConvertidos = JSON.parse(filmesSalvos);

    if (Array.isArray(dadosConvertidos)) {
      return dadosConvertidos;
    }

    return FILMES_PADRAO;
  } catch (erro) {
    console.error("Erro ao carregar os filmes:", erro);
    return FILMES_PADRAO;
  }
}

function App() {
  const [filmes, setFilmes] = useState(carregarFilmes);
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      CHAVE_FILMES,
      JSON.stringify(filmes)
    );
  }, [filmes]);

  function adicionarFilme(event) {
    event.preventDefault();

    if (titulo.trim() === "") {
      toast.error("Digite o nome do filme.");
      return;
    }

    if (genero.trim() === "") {
      toast.error("Digite o gênero do filme.");
      return;
    }

    const novoFilme = {
      id: Date.now(),
      titulo: titulo.trim(),
      genero: genero.trim(),
      assistido: false,
    };

    setFilmes([...filmes, novoFilme]);
    setTitulo("");
    setGenero("");

    toast.success("Filme adicionado com sucesso!");
  }

  function selecionarFilme(id) {
    setFilmeSelecionado(id);
  }

  function fecharDetalhes() {
    setFilmeSelecionado(null);
  }

  function marcarComoAssistido(id) {
    const filmesAtualizados = filmes.map((filme) => {
      if (filme.id === id) {
        return {
          ...filme,
          assistido: true,
        };
      }

      return filme;
    });

    setFilmes(filmesAtualizados);
    toast.success("Filme marcado como assistido!");
  }

  const filmesFiltrados = filmes.filter((filme) => {
    if (filtro === "assistidos") {
      return filme.assistido === true;
    }

    if (filtro === "pendentes") {
      return filme.assistido === false;
    }

    return true;
  });

  const filmeEncontrado = filmes.find((filme) => {
    return filme.id === filmeSelecionado;
  });

  return (
    <main className="app">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
      />

      <div className="container">
        <Header />

        <Card titulo="Adicionar filme">
          <FormularioFilme
            titulo={titulo}
            setTitulo={setTitulo}
            genero={genero}
            setGenero={setGenero}
            adicionarFilme={adicionarFilme}
          />
        </Card>

        <Card titulo="Filtrar filmes">
          <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
          />
        </Card>

        <Card titulo="Filmes">
          <ListaFilmes
            filmes={filmesFiltrados}
            selecionarFilme={selecionarFilme}
            marcarComoAssistido={marcarComoAssistido}
          />
        </Card>

        {filmeEncontrado && (
          <DetalhesFilme
            filme={filmeEncontrado}
            fecharDetalhes={fecharDetalhes}
          />
        )}
      </div>
    </main>
  );
}

export default App;
