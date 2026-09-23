// função de cabecalho que passa a prop titulo
function Header({ titulo }) {
  return (
    // tag de cabeçalho
    <header className="header">
      <div className="marca">
        <div className="marca-icone">AP</div>

        <div>
          {/* Tag título que exibe o valor da prop "titulo"  */}
          <h1>{titulo}</h1>
          {/*Tag de parágrafo que exibe um texto */}
          <p>Organize seu tempo, foque no que importa.</p>
        </div>
      </div>
      {/* Menu de navegação com links pegos pelo id para as seções da página */}
      <nav>
        <a href="#inicio">Início</a>
        <a href="#atendimento">Atendimento</a>
        <a href="#servicos">Serviços</a>
        <a href="#profissional">Profissional</a>
      </nav>
    </header>
  );
}

// Exporta o componente Profissional para que ele possa ser importado e usado em outros arquivos.
export default Header;
