import { useParams } from "react-router";

function Detalhes({ minhasViagens }) {
  const { id } = useParams();
  const viagemSelecionada = minhasViagens.find(
    (viagem) => viagem.id === Number(id),
  );

  if (!viagemSelecionada) {
    return <p>Viagem não encontrada</p>;
  }
  return (
    <main className="detalhes-viagem">
      <h1>Detalhes da viagem</h1>
      <p className="subtitulo">Confira as informações da sua viagem.</p>
      <section className="detalhes-card">
        <h2>{viagemSelecionada.destino}</h2>
        <p>Data de ida: {viagemSelecionada.dataIda}</p>
        <p>Data de volta: {viagemSelecionada.dataVolta}</p>
        <p>Orçamento: R$ {viagemSelecionada.orcamento}</p>
        <p>Atividades: {viagemSelecionada.atividades}</p>
      </section>
    </main>
  );
}

export default Detalhes;
