function Profissional({profissional}) {
    const {
        nome,
        profissao,
        cidade,
        atendeOnline,
        atendePresencial} = profissional;
    
    function verificarOnline(atendeOnline){
        if(atendeOnline){
            return 'Atendiemnto online disponível'
        }
        return 'Sem atendimento online'
    }
    function verificarPresencial(atendePresencial){
        if(atendePresencial){
            return 'Atendimento presencial disponível'
        }
        return 'Sem atendimento presencial'
    }
    
  return (
    <section className="profissional" id = 'profissional'>
        <p className="etiqueta">PROFISSIONAL</p>
        <h2>{nome}</h2>
        <p>{profissao}</p>
        <p>{cidade}</p>
        <p>{verificarOnline(atendeOnline)}</p>
        <p>{verificarPresencial(atendePresencial)} </p>
    </section>
  )
}

export default Profissional
