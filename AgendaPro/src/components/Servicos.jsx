// impotando todas as funcinalidades do componente Card
import Card from "./Card";

// função que passa o prop servicos
function Servicos({ servicos }) {
  // const que passa um objeto e fala que a prop 'servicos' é um array
  const [
    servico1,
    servico2,
    servico3,
    servico4
  ] = servicos;

  return (
    <section
      className="servicos"
      id="servicos"
    >
      <div className="servicos-topo">
        <div>
           {/* Tag parágrafo que exibe uma mensagem*/}
          <p className="etiqueta">SERVIÇOS</p>
            {/* Tag de título que exibe um texto*/}
          <h2>Serviços oferecidos</h2>
        </div>
         {/* Tag parágrafo que exibe uma mensagem*/}
        <p>Conheça os serviços disponíveis</p>
      </div>

      <div className="cards">
        {/* Exibe o componente Card  passando o nome, descrição e valor do primeiro item do array (servico1)  */}
        <Card
          titulo={servico1.nome}
          descricao={servico1.descricao}
          valor={servico1.valor}
        />
         {/* Exibe o componente Card  passando o nome, descrição e valor do segundo item do array (servico2)  */}
        <Card
          titulo={servico2.nome}
          descricao={servico2.descricao}
          valor={servico2.valor}
        />
        {/* Exibe o componente Card  passando o nome, descrição e valor do terceiro item do array (servico3)  */}
        <Card
          titulo={servico3.nome}
          descricao={servico3.descricao}
          valor={servico3.valor}
        />
        {/* Exibe o componente Card  passando o nome, descrição e valor do quarto item do array (servico4)  */}
        <Card
          titulo={servico4.nome}
          descricao={servico4.descricao}
          valor={servico4.valor}
        />
      </div>
    </section>
  );
}

// Exporta o componente Profissional para que ele possa ser importado e usado em outros arquivos.
export default Servicos;
