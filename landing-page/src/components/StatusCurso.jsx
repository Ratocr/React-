function StatusCurso() {
  const vagasTotais = 25;
  const alunosMatriculados = 22;
  const aulasConcluidas = 9;
  const totalAulas = 38;
  const valorAula = 50;

  function verificarVagas(total, matriculados) {
    if (matriculados < total) {
      return "Vagas disponíveis";
    }
    return "Turma lotada";
  }

  function verificarAndamento(concluidas, total) {
    const percentual = (concluidas / total) * 100;

    if (percentual === 100) {
      return "Curso concluído";
    } else if (percentual >= 50) {
      return "curso nem andamento";
    } else {
      return "Curso no início";
    }
  }

  function calcularInvestimento(aulas,valor){
    return aulas *valor;
  }

  const statusVagas = verificarVagas(
    vagasTotais,
    alunosMatriculados
);

  const andamento = verificarAndamento(
    aulasConcluidas,
    totalAulas
);

const investimento  = calcularInvestimento(
    aulasConcluidas,
    valorAula
);

  return (
    <section className="status-curso">
      <h2>Status do Curso</h2>

    <p>{statusVagas}</p>
    <p>Andamento: {andamento}</p>
    <p>
        Investimento realizado :
        R$ {investimento}
    </p>
    </section>
  );
}

export default StatusCurso;
