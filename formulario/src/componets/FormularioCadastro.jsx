import { useState } from "react";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [respostas,setResposta] = useState ('');

  function enviarFormulario(e) {
    e.preventDefault();

 

    console.log(nome);
    console.log(email);
    console.log(curso);
    console.log(mensagem);

    setCurso('')
    setEmail('')
    setNome('')
    setMensagem('')
  }

  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <h2>Cadastro</h2>

      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="curso">Curso</label>
      <select
        id="curso"
        name="curso"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
        required
      >
        <option value="" disabled>
          Selecione um curso
        </option>
        <option value="react">React</option>
        <option value="javascript">JavaScript</option>
        <option value="node">Node.js</option>
      </select>

      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        type="text"
        id="mensagem"
        name="mensagem"
        placeholder="Digite sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        required
      />

      <button type="submit">Cadastrar</button>
      <h3>Dados</h3>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Curso: {curso}</p>
      <p>Mensagem: {mensagem}</p>
    </form>
    
    
 
)
 
}

export default FormularioCadastro;
