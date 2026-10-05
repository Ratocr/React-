import { useState } from 'react'
import './App.css'
import CardConfiguracao from './components/CardConfiguracao'

function App() {
 const [notificacoes, setNotificacoes] = useState(true);
const [temaEscuro, setTemaEscuro] = useState(true);
const [perfilVisivel, setPerfilVisivel] = useState(true);

function alterarNotificacoes(){
  setNotificacoes (!notificacoes)
}

function alterarTema(){
  setTemaEscuro(!temaEscuro)
}

function alternarPefil(){
  setPerfilVisivel(!perfilVisivel)
}


  return (
    <div>
      <main className={temaEscuro ? 'app escuro': 'app claro'}>
        <h1>Painel de configurações</h1>
        <CardConfiguracao titulo= {notificacoes}>
          <p> Status: {notificacoes ? "Ativadas" : "Desativadas"}</p>
          <button onClick={alterarNotificacoes}>{notificacoes ? "Ativar" : "Desativar"} </button>
        </CardConfiguracao>

        <CardConfiguracao titulo = {'Tema'}>
          <p>Tema atual: {temaEscuro ? "Escuro" : "Claro"}</p>
          <button onClick={alterarTema}>Alterar Tema</button>
        </CardConfiguracao>

        <CardConfiguracao titulo = {'Perfil'}>
          <p>Status: {perfilVisivel ? 'Esconder perfil' : 'Mostrar perfil'}</p>
          <button onClick={alternarPefil}>{perfilVisivel ? "Esconder Perfil" : "Mostrar Perfil"}</button>

           {perfilVisivel && (
          <div className="perfil">
            <h3>Perfil do usuário</h3>
            <p>Estudante React</p>
          </div>
        )}
        
        </CardConfiguracao>

       
      </main>

    </div>
    
  )
}

export default App
