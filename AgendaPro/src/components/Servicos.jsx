// impotando todas as funcinalidades do componente Card
import Card from "./Card";

// função que passa o prop servicos
function Servicos({ servicos }) {
  
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
        {servicos.map((servicos) =>(
          <Card
          key={servicos.nome}
          titulo={servicos.nome}
          descricao={servicos.descricao}
          valor={servicos.valor}
          />
        ))}
      </div>
    </section>
  );
}

// Exporta o componente Profissional para que ele possa ser importado e usado em outros arquivos.
export default Servicos;
