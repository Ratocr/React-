// impotando todas as funcinalidades dos componentes Header,Resumo,Atendimento,Servicos,Profissional e Footer
import "./App.css";
import Header from "./components/Header";
import Resumo from "./components/Resumo";
import Atendimento from "./components/Atendimento";
import Servicos from "./components/Servicos";
import Profissional from "./components/Profissional";
import Footer from "./components/Footer";

function App() {
// Cria um objeto com as informações básicas do atendimento e guarda na variavel atendimentoBase
  const atendimentoBase = {
    cliente: "João Silva",
    servico: "Consulta inicial",
    data: "25/09/2026",
    horario: "14:30",
    modalidade: "Online",
    valor: 120,
    pago: true
  };

// Cria um novo objeto copiando todos os dados de atendimentoBase com operador spread e adicionando a propriedade observacao
  const atendimentoCompleto = {
    ...atendimentoBase,
    observacao: "O link será enviado alguns minutos antes do horário."
  };

// Cria um objeto com as informações do usuário e guarda na variável resumo
  const resumo = {
    nome: "Marina",
    atendimentosHoje: 4,
    valorRecebido: 480,
    horariosDisponiveis: 3
  };

// Cria um array de objetos com as informações dos serviços oferecidos e guarda na variável servicosBase
  const servicosBase = [
    {
      nome: "Consulta inicial",
      descricao: "Primeiro atendimento para conhecer suas necessidades.",
      valor: 120
    },
    {
      nome: "Retorno",
      descricao: "Acompanhamento do seu processo.",
      valor: 80
    },
    {
      nome: "Avaliação",
      descricao: "Avaliação completa e personalizada.",
      valor: 150
    }
  ];
// Cria um novo array copiando os dados de servicosBase e adiciona um novo objeto com orientações
  const servicos = [
    ...servicosBase,
    {
      nome: "Orientação",
      descricao: "Orientação e suporte para suas dúvidas.",
      valor: 100
    }
  ];

  // Cria um objeto com as informações básicas do profissional e guarda na variável profissionalBase
  const profissionalBase = {
    nome: "Marina Santos",
    profissao: "Psicóloga",
    cidade: "Brasília - DF"
  };

  // Cria um novo objeto copiando todos os dados de profissionalBase com operador spread e adicionando a propriedade atendeOnline e atendePresencial
  const profissionalCompleto = {
    ...profissionalBase,
    atendeOnline: true,
    atendePresencial: true
  };

  return (
    <>
      {/* Exibe o componente Header passando o nome do aplicativo como prop */}
      <Header titulo="AgendaPro" />

      <main>
        {/* Exibe o componente Resumo passando o a variável resumo como prop */}
        <Resumo resumo={resumo} />

        <div className="painel-principal">
          {/* Exibe o componente Atendimento passando o a variável atendimentoCompleto como prop */}
          <Atendimento atendimento={atendimentoCompleto} />
           {/* Exibe o componente Profissional passando o a variável profissionalCompleto como prop */}
          <Profissional
            profissional={profissionalCompleto}
          />
        </div>
        {/* Exibe o componente Servicos passando o a variável servicos como prop */}
        <Servicos servicos={servicos} />
      </main>

  {/* Exibe o componente Servicos passando o a variável servicos como prop */}
      <Footer texto="AgendaPro © 2026" />
    </>
  );
}

export default App;
