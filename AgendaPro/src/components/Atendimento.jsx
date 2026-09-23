// função que passa o prop atendimento

function Atendimento({ atendimento }) {
  // const que passa um objeto e fala que a prop 'atendimento' é um objeto
  const {
    cliente,
    servico,
    data,
    horario,
    modalidade,
    valor,
    pago,
    observacao
  } = atendimento;
// Função para verificar o pagamento: caso seja pago, retorna a mensagem "Pagamento confirmado", caso não, "Pagamento pendente".

  function verificarPagamento(pago) {
    if (pago) {
      return "Pagamento confirmado";
    }

    return "Pagamento pendente";
  }
// Função que verifica se o atendimento é online ou é presencial, se escolherem a modalidade  online, retorna a mensagem " "O atendimento será realizado por videochamada.", caso não, "O atendimento será realizado presencialmente."
  function verificarModalidade(modalidade) {
    if (modalidade === "Online") {
      return "O atendimento será realizado por videochamada.";
    }

    return "O atendimento será realizado presencialmente.";
  }

  // Armazena o resultado da função verificarPagamento na variável statusPagamento
const statusPagamento = verificarPagamento(pago);

// Armazena o resultado da função verificarModalidade na variável statusModalidade
const statusModalidade = verificarModalidade(modalidade);

  return (
    <section
      className="atendimento"
      id="atendimento"
    >
      <div className="secao-titulo">
        <span className="secao-icone">A</span>
        {/* Tag de titulo para exibir uma mensagem */}
        <h2>Próximo atendimento</h2>
        {/* Tag de texto para exibir uma mensagem */}
        <span className="data-destaque">
          Hoje, 25 de setembro
        </span>
      </div>

      <div className="atendimento-conteudo">
        <div className="cliente">
          <div className="avatar-cliente">
             {/* mostra o parametro cliente do objeto e a primeira letra do nome */}
            {cliente.charAt(0)}
          </div>

          <div>
            {/* Tag título que exibe o valor da propriedade "cliente"  */}
            <h3>{cliente}</h3>
         {/* Tag parágrafo que exibe o valor a propriedade "servico"  */}
            <p>{servico}</p>
          </div>
        </div>

        <div className="detalhes-atendimento">
          <div>
            {/* Tag parágrafo que exibe o valor a propriedade "data"  */}
            <p><strong>Data:</strong> {data}</p>
             {/* Tag parágrafo que exibe o valor a propriedade"horario"  */}
            <p><strong>Horário:</strong> {horario}</p>
           {/* Tag parágrafo que exibe o valor da propriedade "modalidade"  */}
            <p><strong>Modalidade:</strong> {modalidade}</p>
         {/* Tag parágrafo que exibe o valor da propriedade "valor"  */}
            <p><strong>Valor:</strong> R$ {valor}</p>

            <div className="pagamento">
            {/* mostra o resultado armazenado na variável statusPagamento */}
              <strong>{statusPagamento}</strong>
              {/* Tag de texto para exibir uma mensagem */}
              <span>O pagamento já foi realizado.</span>
            </div>
          </div>

          <div className="modalidade-box">
             {/* Tag de texto para exibir um emoji */}
            <span className="video-icone">▶</span>
            {/* mostra o resultado armazenado na variável statusModalidade */}
            <strong>{statusModalidade}</strong>
              {/* Tag parágrafo que exibe o valor da propriedade "observacao"  */}
            <p>{observacao}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exporta o componente Profissional para que ele possa ser importado e usado em outros arquivos.
export default Atendimento;
