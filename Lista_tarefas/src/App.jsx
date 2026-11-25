import { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiCheck, FiX } from "react-icons/fi";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");

  // array de objetos, ja com dois modelos prontos
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React" },
    { id: 2, texto: "Praticar useState" },
  ]);

  // funcao para mudar o id assim que atualizar e mudar o texto
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");

  // evento que cria novo objeto, com o id pelo dia de hoje
  function adicionarTarefa(e) {
    // previne a atulizar ienguanto escrev
    e.preventDefault();

    if (texto.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: texto,
    };
// pega o array tarfeas ja feito e adiciona o novo objeto
    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  // pega a tarefa e tudo quer for diferente daqwuele id renderiza
  function excluirTarefa(id) {
    const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id);

    // cria uma const para sempre fazer a exclusao e usa o set para modificar as taredfas
    setTarefas(tarefasAtualizadas);
  }

  function iniciarEdicao(tarefa) {
    setEditandoId(tarefa.id);
    setTextoEditado(tarefa.texto);
  }

  function salvarEdicao(id) {
    // verifica se estiver vazio nao salva
    if (textoEditado.trim() === "") {
      return;
    }

    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          texto: textoEditado,
        };
      }

      return tarefa;
    });

    setTarefas(tarefasAtualizadas);
    setEditandoId(null);
    setTextoEditado("");
  }

  function cancelarEdicao() {
    setEditandoId(null);
    setTextoEditado("");
  }

  return (
    <main className="app">
      <section className="todo">
        <h1>Minha Lista de Tarefas</h1>

        <form onSubmit={adicionarTarefa}>
          <input
            type="text"
            placeholder="Digite uma tarefa"
            value={texto}
            onChange={(e) => {
              // \pega tudo que o usuario escreve
              setTexto(e.target.value);
            }}
          />

          <button type="submit">
            <FiPlus />
            Adicionar
          </button>
        </form>

        <section className="lista">
          {tarefas.map((tarefa) => (
            <article className="tarefa" key={tarefa.id}>
              {editandoId === tarefa.id ? (
                <>
                  <input
                    type="text"
                    value={textoEditado}
                    onChange={(e) => {
                      setTextoEditado(e.target.value);
                    }}
                  />
                  <div className="acoes">
                    <button
                      className="salvar"
                      onClick={() => salvarEdicao(tarefa.id)}
                    >
                      <FiCheck />
                    </button>

                    <button className="cancelar" onClick={cancelarEdicao}>
                      <FiX />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p>{tarefa.texto}</p>

                  <div className="acoes">
                    <button
                      className="editar"
                      onClick={() => iniciarEdicao(tarefa)}
                    >
                      <FiEdit2 />
                    </button>

                    <button
                      className="excluir"
                      onClick={() => excluirTarefa(tarefa.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </>
              )}
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
