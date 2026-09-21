function Resumo({resumo}) {
    const{
        atendimentosHoje,
        valorRecebido,
        horariosDisponiveis} = resumo

  return (
  <section className="resumo" id = "resumo">
    <h2>Resumo do dia</h2>
    <div className="resumo-cards">
        <div>
            <strong>{atendimentosHoje}</strong>
            <span>Atendimentos Hoje</span>
        </div>

        <div>
            <strong>R$ {valorRecebido}</strong>
            <span>Valor recebido</span>
        </div>

        <div>
            <strong>{horariosDisponiveis}</strong>
            <span>Horários disponíveis</span>
        </div>
        
    </div>
  </section>
  );
}

export default Resumo
