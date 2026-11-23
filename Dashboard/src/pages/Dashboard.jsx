import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiBox, FiLogOut } from "react-icons/fi";
import Produtos from "./Produtos";

function Dashboard() {
  const navigate = useNavigate();

  function sair() {
    console.log("Saindo do painel");

    navigate("/");
  }

  return (
    <main className="dashboard">
      <nav className="menu">
        <strong>AdminStore</strong>

        <Link to="/Dashboard">
          <FiHome />
          Dashboard
        </Link>

        <Link to="/Produtos">
          <FiBox />
          Produtos
        </Link>

        <button onClick={sair}>
          <FiLogOut />
          Sair
        </button>
      </nav>

      <section className="conteudo">
        <h1>Dashboard</h1>

        <p>Bem-vindo ao painel administrativo.</p>

        <div className="resumo">
          <article>
            <span>Produtos</span>
            <strong>{Produtos.length}</strong>
          </article>

          <article>
            <span>Categorias</span>
            <span>3</span>
          </article>

          <article>
            <span>Usuário</span>
            <strong>Admin</strong>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
