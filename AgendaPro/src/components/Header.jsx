function Header({ titulo }) {
  return (
    <header className="header">
      <div>
        <h2>{titulo}</h2>
        <p>painel de atendimento</p>
      </div>

      <nav>
        <a href="">Resumo</a>
        <a href="">Atendimento</a>
        <a href="">Serviços</a>
        <a href="">Profissional</a>
      </nav>
    </header>
  );
}

export default Header;
