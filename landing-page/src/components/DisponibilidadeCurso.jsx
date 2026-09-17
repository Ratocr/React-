function DisponibilidadeCurso(){
    const vagastotais = 25
    const alunosIncritos = 22

    function temvagas(vagasTotais,alunosIncritos){
        if(vagasTotais - alunosIncritos == 0 )  {
            return 'Não há vagas'
        } else{
            return 'Tem vagas'
        }
    }

    return(
        <div className="disponibilidade">
            <p>{temvagas(vagastotais,alunosIncritos)}</p>
        </div>
    )
}

export default DisponibilidadeCurso