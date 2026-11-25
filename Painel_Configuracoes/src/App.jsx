import { useState } from "react";
import CardConfiguracao from "./components/CardConfiguracao";
import "./App.css";

function App() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [perfilVisivel, setPerfilVisivel] = useState(true);

  function alterarNotificacoes() {
    setNotificacoes(!notificacoes);
  }

  function alterarTema() {
    setTemaEscuro(!temaEscuro);
  }

  function alterarPerfil() {
    setPerfilVisivel(!perfilVisivel);
  }

  return (
    <main className={temaEscuro ? "app escuro" : "app claro"}>
      <h1>Painel de Configurações</h1>

      <CardConfiguracao titulo="Notificações">
        <p>
          Status: {notificacoes ? "Ativadas" : "Desativadas"}
        </p>

        <button onClick={alterarNotificacoes}>
          {notificacoes ? "Desativar" : "Ativar"}
        </button>
      </CardConfiguracao>

      <CardConfiguracao titulo="Tema">
        <p>
          Tema atual: {temaEscuro ? "Escuro" : "Claro"}
        </p>

        <button onClick={alterarTema}>
          Alterar tema
        </button>
      </CardConfiguracao>

      <CardConfiguracao titulo="Perfil">
        <p>
          Status: {perfilVisivel ? "Visível" : "Escondido"}
        </p>

        <button onClick={alterarPerfil}>
          {perfilVisivel
            ? "Esconder perfil"
            : "Mostrar perfil"}
        </button>

        {perfilVisivel && (
          <div className="perfil">
            <h3>Perfil do usuário</h3>
            <p>Estudante React</p>
          </div>
        )}
      </CardConfiguracao>
    </main>
  );
}

export default App;
