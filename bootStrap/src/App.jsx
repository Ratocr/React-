import Header from "./components/Header";
function App() {
  return (
    <div className="bg-white">
      

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
            Empresinha
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#inicio">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicos">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Apresentação */}
      <section id="inicio" className="bg-white py-5">
        <div className="container text-center py-5">
          <h1 className="fw-bold text-dark">
            Bem-vindo à Empresinha
          </h1>

          <p className="text-secondary">
            Soluções simples para facilitar seu dia a dia.
          </p>

          <a href="#sobre" className="btn btn-primary">
            Saiba mais
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="text-dark">Sobre nós</h2>
          <p className="text-secondary">
            Conheça nossa empresa e nossas soluções.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-white py-5">
        <div className="container">
          <h2 className="text-dark text-center mb-4">
            Nossos serviços
          </h2>

          <div className="row g-3">
            {["Serviço 1", "Serviço 2", "Serviço 3"].map((servico, index) => (
              <div className="col-md-4" key={index}>
                <div className="card bg-light border-0 h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title text-dark">
                      {servico}
                    </h5>
                    <p className="card-text text-secondary">
                      Conheça nossas soluções e serviços.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="text-dark">Entre em contato</h2>
          <p className="text-secondary">
            Estamos esperando sua mensagem!
          </p>
          <button className="btn btn-primary">
            Fale conosco
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-top py-4">
        <div className="container text-center">
          <p className="text-secondary mb-0">
            © 2026 Empresinha. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
