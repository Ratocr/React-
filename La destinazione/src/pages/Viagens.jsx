import { useState } from "react";
import { Link } from "react-router";
import { FaEye, FaTrash, FaEdit } from "react-icons/fa";

function Viagens({ minhasViagens, setMinhasViagens }) {
  const [destino, setDestino] = useState("");
  const [dataIda, setDataIda] = useState("");
  const [dataVolta, setDataVolta] = useState("");
  const [orcamento, setOrcamento] = useState("");
  const [atividades, setAtividades] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  function editarViagem(viagem) {
    setEditandoId(viagem.id);
    setDestino(viagem.destino);
    setDataIda(viagem.dataIda);
    setDataVolta(viagem.dataVolta);
    setOrcamento(viagem.orcamento);
    setAtividades(viagem.atividades);
  }

  function adicionarViagem(event) {
    event.preventDefault();

    if (
      !destino.trim() ||
      !dataIda.trim() ||
      !dataVolta.trim() ||
      !orcamento.trim() ||
      !atividades.trim()
    ) {
      alert("Prencha todos os campos");
      return;
    }

    if (editandoId !== null) {
      const viagensAtualizadas = minhasViagens.map((viagem) =>
        viagem.id === editandoId
          ? {
              ...viagem,
              destino: destino.trim(),
              dataIda: dataIda.trim(),
              dataVolta: dataVolta.trim(),
              orcamento: Number(orcamento.replace(",", ".")),
              atividades: atividades.trim(),
            }
          : viagem,
      );

      setMinhasViagens(viagensAtualizadas);
    } else {
      const novaViagem = {
        id: Date.now(),
        destino: destino.trim(),
        dataIda: dataIda.trim(),
        dataVolta: dataVolta.trim(),
        orcamento: Number(orcamento.replace(",", ".")),
        atividades: atividades.trim(),
      };
      setMinhasViagens([...minhasViagens, novaViagem]);
    }
    setEditandoId(null);
    setDestino("");
    setDataIda("");
    setDataVolta("");
    setOrcamento("");
    setAtividades("");
  }

  function deletarViagem(id) {
    const listaAtulizada = minhasViagens.filter((viagens) => viagens.id !== id);
    setMinhasViagens(listaAtulizada);
  }

  return (
    <main className="minhaViagens">
      <h2>Viagens</h2>

      <form className="viagens" onSubmit={adicionarViagem}>
        <input
          type="text"
          placeholder="Destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />

        <input
          type="date"
          placeholder="Data ida"
          value={dataIda}
          onChange={(e) => setDataIda(e.target.value)}
        />

        <input
          type="date"
          placeholder="Data volta"
          value={dataVolta}
          onChange={(e) => setDataVolta(e.target.value)}
        />

        <input
          type="text"
          placeholder="Orçamento"
          value={orcamento}
          onChange={(e) => setOrcamento(e.target.value)}
        />

        <input
          type="text"
          placeholder="Atividades"
          value={atividades}
          onChange={(e) => setAtividades(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
      <section className="viagens-cadastradas">
        {minhasViagens.map((viagens) => (
          <article key={viagens.id}>
            <h3>Destino: {viagens.destino}</h3>
            <p>
              Data ida: <strong>{viagens.dataIda}</strong>
            </p>
            <p>
              Data volta: <strong>{viagens.dataVolta}</strong>
            </p>
            <p>
              Orçameto: R$ <strong>{viagens.orcamento}</strong>
            </p>
            <p>
              Atividades: <strong>{viagens.atividades}</strong>
            </p>
            <Link className="botao-detalhes" to={`/viagens/${viagens.id}`}>
              <FaEye />
              Ver detalhes
            </Link>
            <div className="acoes">
              <button
                className="botao-excluir"
                type="button"
                onClick={() => deletarViagem(viagens.id)}
              >
                <FaTrash />
                Excluir
              </button>

              <button
              className="botao-editar"
               type="button"
                onClick={() => editarViagem(viagens)}>
                <FaEdit />
                Editar
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Viagens;
