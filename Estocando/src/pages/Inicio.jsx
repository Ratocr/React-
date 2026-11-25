import Header from "../components/Header";

function Inicio({ produtos }) {
  return (
    <main>
      <Header
        titulo="Bem-vindo ao Meu Estoque"
        resumo="Gerencie seus produtos em um só lugar."
      />

      <section className="resumo">
        <div className="card">
          <h3>Total de produtos</h3>
          <p>{produtos.length}</p>
        </div>

        <div className="card">
          <h3>Unidades em estoque</h3>
          <p>
            {produtos.reduce(
              (total, produto) => total + produto.quantidade,
              0
            )}
          </p>
        </div>

        <div className="card">
          <h3>Estoque baixo</h3>
          <p>
            {produtos.filter(
              (produto) =>
                produto.quantidade > 0 && produto.quantidade <= 5
            ).length}
          </p>
        </div>
      </section>
    </main>
  );
}

export default Inicio;