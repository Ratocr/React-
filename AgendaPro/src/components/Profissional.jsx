// função que passa a prop profissional
function Profissional({ profissional }) {
    // const que passa um objeto e fala que a prop 'profissional ' é um objeto
  const {
    nome,
    profissao,
    cidade,
    atendeOnline,
    atendePresencial
  } = profissional;
// Função para verificar o tipo de atendimento que agendou : caso seja online, retorna a mensagem "Atendimento online", caso não, "Sem atendimento online"
  function verificarOnline(atendeOnline) {
    if (atendeOnline) {
      return "Atendimento online";
    }

    return "Sem atendimento online";
  }
// Função para verificar o tipo de atendimento que agendou : caso seja presencial , retorna a mensagem "Atendimento presencial", caso não, "Sem atendimento presencial"
  function verificarPresencial(
    atendePresencial
  ) {
    if (atendePresencial) {
      return "Atendimento presencial";
    }

    return "Sem atendimento presencial";
  }

  return (
    <section
      className="profissional"
      id="profissional"
    >
      <div className="secao-titulo">
        <span className="secao-icone">P</span>
        {/* Tag de título que exibe um texto*/}
        <h2>Sua profissional</h2>
      </div>

      <div className="profissional-avatar">
        MS
      </div>
      {/* Tag título que exibe o valor da propriedade "nome"  */}
      <h3>{nome}</h3>
      {/* Tag parágrafo que exibe o valor da propriedade "profissao"  */}
      <p className="profissao">{profissao}</p>

      <div className="profissional-dados">
         {/* Tag parágrafo que exibe o valor da propriedade "cidade"  */}
        <p>📍  {cidade}</p>
         {/* Tag parágrafo mostra o resultado da função verificarOnline e recebe como parametro a propriedade "atendeOnline" */}
        <p>▣ {verificarOnline(atendeOnline)}</p>
         {/* Tag parágrafo mostra o resultado da função verificarPresencial e recebe como parametro o a propriedade  "atendePresencial)" */}
        <p>⌂ {verificarPresencial(atendePresencial)}</p>
      </div>
        {/* Tag parágrafo que exibe um texto */}
      <p className="profissional-frase">
        Cuidar de pessoas é transformar histórias.
      </p>
    </section>
  );
}
// Exporta o componente Profissional para que ele possa ser importado e usado em outros arquivos.
export default Profissional;
