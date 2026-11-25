import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Formulario from "../components/Formulario";

function CadastrarProduto({ adicionarProdutos, produtos }) {
  const navigate = useNavigate();

  function cadastrar(novoProduto) {
    adicionarProdutos(novoProduto);
    navigate("/produtos");
  }

  return (
    <main>
      <Header
        titulo="Cadastrar produto"
        resumo="Adicione um novo produto ao seu estoque."
      />

      <Formulario
        adicionarProdutos={cadastrar}
        produtos={produtos}
      />
    </main>
  );
}

export default CadastrarProduto;