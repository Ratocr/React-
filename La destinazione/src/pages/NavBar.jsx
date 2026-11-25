import { Link } from "react-router";

function NavBar() {
  return (
    <header className="navbar">
        <nav className="navbar-links">
        <Link to="/">Início</Link>
        <Link to="/viagens">Minhas Viagens</Link>
      </nav>
    </header>
  );
}

export default NavBar;
