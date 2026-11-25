import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Meu Estoque</h2>

      <div>
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/cadastrar">Cadastrar produto</Link>
      </div>
    </nav>
  );
}

export default Navbar;