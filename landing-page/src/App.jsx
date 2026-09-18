import "./App.css";
import Benefícios from "./components/Beneficios";
import Contato from "./components/Contato";
import DadosCurso from "./components/DadosCurso";
import Depoimento from "./components/Depoimentos";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PerfilAluno from "./components/PerfilAluno";
;

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

      <DadosCurso/>

      <PerfilAluno/>

     
     

    
      <Footer/>
    </>
  );
}

export default App;
