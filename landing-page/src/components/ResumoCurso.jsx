function ResumoCurso() {
  const curso = "React";
  const CargaHoraria = 112;
  const aulasConcluidas = 9;
  const valorAula = 50;
  const horasEstudadas = aulasConcluidas * 3;
  const valorTotal = CargaHoraria * valorAula;
  const faltamAulas = 38 - aulasConcluidas;
  const nomeIntrutor = 'Igor Medeiros'
  const turma = 'Técnico em desenvolvimento de sistemas '
  const alunosMatriculados = 22
  const vagasDisponiveis = 25 - alunosMatriculados 

  const ativo = true;

  return (
    <section className="resumo-curso">
      <h2>Resumo do Curso</h2>
      <p>Curso: {curso}</p>
      <p>Turma: {turma}</p>
      <p>Carga horária: {CargaHoraria}</p>
      <p>Aulas concluídas: {aulasConcluidas}</p>
      <p>Horas estudadas: {horasEstudadas}</p>
      <p>Valor total: R$ {valorTotal}</p>
      <p>Aulas Restantes: {faltamAulas}</p>
      <p>Instrutor: {nomeIntrutor}</p>
      <p>Vagas restantes: {vagasDisponiveis}</p>
      <p>Curso ativo: {String(ativo)}</p>
    </section>
  );
}

export default ResumoCurso;
