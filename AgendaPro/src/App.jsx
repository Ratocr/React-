import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Profissional from './components/Profissional'
import Resumo from './components/Resumo'
import Servicos from './components/Servicos'

function App() {

   const resumo = {
        atendimentosHoje: 4,
        valorRecebido: 480,
        horariosDisponiveis: 3}
    
    const servicoBase=[
      'Consulta Inicial',
      'Retorno',
      'Avaliação'
    ]    
    const servicos = [
      ...servicoBase,
      'Cirurgia',
      'Orientação'
    ]

    const profissionalBase = {
      nome: 'Igor',
      profissao: 'Geral',
      cidade: 'Brasília'
    }

    const profissional = {
      ...profissionalBase,
      atendeOnline: true,
      atendePresencial: false
    }


  return (
    <>
     <Header titulo ={'AgendaPRO'}/>
     <Resumo resumo ={resumo}/> 
     <Servicos servicos= {servicos}/>
     <Profissional profissional= {profissional}/>

      <Footer/>


    </>
  )
}

export default App
