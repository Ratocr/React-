import Header from "../components/Header";
import ListaProdutos from "../components/ListaProdutos";

function Produtos({ produtos, excluir, alterarQuantidade }) {
  return (
    <main>
      <Header
        titulo="Meus produtos"
        resumo="Visualize e gerencie seus produtos cadastrados."
      />

      <ListaProdutos
        produtos={produtos}
        excluir={excluir}
        alterarQuantidade={alterarQuantidade}
      />
    </main>
  );
}

export default Produtos;