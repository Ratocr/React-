import "./App.css";
import Benefícios from "./components/Beneficios";
import Contato from "./components/Contato";
import Depoimento from "./components/Depoimentos";
import DisponibilidadeCurso from "./components/DisponibilidadeCurso";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ResultadoAluno from "./components/ResultadoAluno";
import ResumoCurso from "./components/ResumoCurso";
import StatusCurso from "./components/StatusCurso";
import StatusInscricao from "./components/StatusInscricao";

function App() {
  return (
    <>
      <Header />

      <Hero
        titulo="Aprenda progração do zero"
        descricao="Um curso para quem quer começar na tecnologia"
        botao="Quero começar"
      />

      <Benefícios />

      <Formulario />
      
      <Depoimento/>

      <Contato/>

      <ResumoCurso/>

      <StatusCurso/>

      <StatusInscricao/>
      <ResultadoAluno/>
      <DisponibilidadeCurso/>
      
      <Footer/>
    </>
  );
}

export default App;
