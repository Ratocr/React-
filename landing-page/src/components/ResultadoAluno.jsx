function ResultadoAluno() {
  const nota = 5;

  function verificarNota(notaAluno) {
    if (notaAluno >= 7) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }

  return (
    <div className="verificar">
      <p>O aluno está: {verificarNota(nota)}</p>
    </div>
  );
}

export default ResultadoAluno;
