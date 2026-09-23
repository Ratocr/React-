// função que passa a prop resumo
function Resumo({ resumo }) {
// const que passa um objeto e fala que a prop "resumo" é um objeto
  const {
    nome,
    atendimentosHoje,
    valorRecebido,
    horariosDisponiveis
  } = resumo;

  return (
    <section className="resumo" id="inicio">
      <div className="resumo-topo">
        <div>
          {/* Tag parágrafo que exibe uma mensagem*/}
          <p className="etiqueta">BEM-VINDA DE VOLTA</p>
           {/* Tag título que exibe o valor da propriedade "nome" junto com um texto  */}
          <h2>
            Olá, <span>{nome}!</span>
          </h2>
          {/* Tag parágrafo que exibe uma mensagem*/}
          <p className="resumo-subtitulo">
            Aqui está o resumo da sua agenda de hoje.
          </p>
        </div>

        <div className="frase">
          <strong>“</strong>
          {/* Tag parágrafo que exibe uma mensagem*/}
          <p>
            Disciplina no presente resulta em
            tranquilidade no futuro.
          </p>
          {/* Tag de texto que exibe uma mensagem*/}
          <span>AgendaPro</span>
        </div>
      </div>

      <div className="resumo-cards">
        <div className="resumo-card">
            {/* Tag de texto que exibe uma mensagem*/}
          <span className="resumo-icone">01</span>
          <div>
            {/* Tag de texto que exibe uma mensagem*/}
            <p>Atendimentos hoje</p>
            {/* Tag que exibe o valor da propriedade "atendimentoHoje"*/} 
            <strong>{atendimentosHoje}</strong>
            {/* Tag de texto que exibe uma mensagem pequena*/}
            <small>agendados para hoje</small>
          </div>
        </div>

        <div className="resumo-card">
          <span className="resumo-icone">R$</span>
          <div>
             {/* Tag parágrafo que exibe uma mensagem*/}
            <p>Valor recebido</p>
            {/* Tag que exibe o valor da propriedade "valorRecebido"*/} 
            <strong>R$ {valorRecebido}</strong>
            {/* Tag de texto que exibe uma mensagem pequena*/}
            <small>em atendimentos hoje</small>
          </div>
        </div>

        <div className="resumo-card">
          <span className="resumo-icone">03</span>
          <div>
            {/* Tag parágrafo que exibe uma mensagem*/}
            <p>Horários disponíveis</p>
            {/* Tag que exibe o valor da propriedade "horariosDisponiveis"*/} 
            <strong>{horariosDisponiveis}</strong>
            {/* Tag de texto que exibe uma mensagem pequena*/}
            <small>na sua agenda de hoje</small>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exporta o componente Profissional para que ele possa ser importado e usado em outros arquivos.
export default Resumo;
