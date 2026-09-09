
import './App.css'
import Benefícios from './components/Beneficios'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  

  return (
    <>
    <Header/>

    <Hero
    titulo= 'Aprenda progração do zero'
    descricao= 'Um curso para quem quer começar na tecnologia'
    botao = 'Quero começar'
    />

    <Benefícios/>
    <Formulario/>

    
    
    </>
  )
}

export default App
