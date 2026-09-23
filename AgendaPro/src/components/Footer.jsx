// função de rodapé que passa a prop "texto"
function Footer({ texto }) {
  return (
    // tag de rodapé
    <footer className="footer">
      <div>
       {/* Tag de título que exibe um texto*/}
        <h2>
          Agenda<span>Pro</span>
        </h2>
         {/* Tag parágrafo que exibe uma mensagem*/}
        <p>
          Organize seu tempo, foque no que importa.
        </p>
      </div>

      <div className="footer-direita">
        {/* Menu de navegação com links pegos pelo id para as seções da página */}
        <nav>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#profissional">Profissional</a>
        </nav>
        {/* Tag parágrafo que exibe o valor da prop "texto" junto com uma mensagem após*/}
        <p>{texto}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

// Exporta o componente Profissional para que ele possa ser importado e usado em outros arquivos.

export default Footer;
