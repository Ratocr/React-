function DadosCurso() {
  const curso = {
    nome: "React",
    cargaHorario: 112,
    nivel: "Iniciante",
    ativo: true,
    instrutor: "Igor M",
  };
  curso.nome = 'Html'

  const modulos = [
    "Fundamentos",
    "Componentes",
    "Props",
    "JavaScript",
    "Estado",
  ];
  modulos.push('Bibliotecas')

  const alunos = [
    {
      nome: "Ana",
      idade: 28,
      ativo: true,
    },
    {
      nome: "Lucas",
      idade: 22,
      ativo: true,
    },
    {
      nome: "Mariana",
      idade: 19,
      ativo: false,
    },
  ];
  alunos[0].idade = 30

  const aluno ={
        nome: 'Pedro',
        idade: 15,
        aprovado: true
    }
  

  return (
    <section className="dados-curso">
      <h2>Dados do curso</h2>
      <p>Nome do curos: {curso.nome}</p>
      <p>Carga horária: {curso.cargaHorario}</p>
      <p>Nível: {curso.nivel}</p>
      <p>Instrutor: {curso.instrutor}</p>

      <h3>Módulos</h3>
      <p>{modulos[0]}</p>
      <p>{modulos[1]}</p>
      <p>{modulos[2]}</p>
      <p>{modulos[3]}</p>
      <p>{modulos[4]}</p>
      <p>{modulos[5]}</p>
      
      <h3>Alunos</h3>
      <p>Aluno 1 : {alunos[0].nome}</p>
      <p>Idade: {alunos[0].idade }</p>
      <p>Aluno 2 : {alunos[1].nome}</p>
      <p>Idade: {alunos[1].idade }</p>
      <p>Aluno 3 : {alunos[2].nome}</p>
      <p>Idade: {alunos[2].idade }</p>

      <h3>Alunp</h3>
      <p>Aluno:{aluno.nome}</p>
      <p>Idade:{aluno.idade}</p>
      <p>Aprovado:{String(aluno.aprovado)}</p>
    
    
    
    
    </section>
  );
}
export default DadosCurso;
