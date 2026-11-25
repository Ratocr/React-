import { useState } from "react";
import "./App.css";
import { FiPlus, FiEdit2, FiTrash2, FiSave, FiX } from "react-icons/fi";

function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [editandoId, setEditantoId] = useState(null);

  const [contatos, setContatos] = useState([
    {
      id: 1,
      nome: "Ana",
      telefone: "(61) 99999-1111",
      email: "ana@email.com",
    },
    {
      id: 2,
      nome: "Carlos",
      telefone: "(61) 99999-2222",
      email: "carlos@email.com",
    },
  ]);

  function salvarContato(event) {
    event.preventDefault();
    if (nome.trim() === "" || telefone.trim() === "" || email.trim() === "") {
      return;
    }

    if (editandoId !== null) {
      const contatosAtulizados = contatos.map((contato) => {
        if (contato.id === editandoId) {
          return {
            ...contato,
            nome: nome,
            telefone: telefone,
            email: email,
          };
        }
        return contato;
      });

      console.log(contatosAtulizados);
      setContatos(contatosAtulizados);
      setEditantoId(null);

      setNome("");
      setTelefone("");
      setEmail("");

      return;
    }

    const novoContato = {
      id: Date.now(),
      nome: nome,
      telefone: telefone,
      email: email,
    };

    setContatos([...contatos, novoContato]);
    setNome("");
    setTelefone("");
    setEmail("");
  }

  function excluirContato(id) {
    const contatoAtulizada = contatos.filter((contato) => contato.id !== id);
    setContatos(contatoAtulizada);
  }

  function iniciarEdicao(contato) {
    console.log("Contato selecionado", contato);

    setEditantoId(contato.id);
    setNome(contato.nome);
    setTelefone(contato.telefone);
    setEmail(contato.email);
  }

  return (
    <main className="app">
      <section className="agenda">
        <h1>Lista de Contatos</h1>

        <form onSubmit={salvarContato}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <button type="submit "></button>
        </form>
        <section className="lista-contatos">
          {contatos.map((contato) => (
            <article className="contato" 
            key={contato.id}>
              <div>
              <h2>{contato.nome}</h2>
              <p>{contato.telefone}</p>
              <p>{contato.email}</p>
              </div>

              <div className="acoes">
              <button onClick={()=>
                iniciarEdicao(contato)
              }
              >
                <FiEdit2 />
                Editar
              </button>

              <button 
              onClick={() =>
                excluirContato(contato.id)
              }>
                <FiTrash2/>
                Exluir
              </button>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
