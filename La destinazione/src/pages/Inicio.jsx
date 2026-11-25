import { Link } from "react-router";


function Inicio({minhasViagens}) {
 const quantidadeViagens = minhasViagens.length;


  return (
    <main className="inicio">
   
      <h1>La Destinazione</h1>
      <h2>Olá, viajante!</h2>
      <p>Organize suas viagens e planeje novas aventuras.</p>
      <div className="resumo">
        <article>
          <p>
            Minhas Viagens: <strong>{quantidadeViagens}</strong>
          </p>
        </article>
        <article>
          <p>
            Orçamento total: <strong>R$ 5.000</strong>
          </p>
        </article>
      </div>

      <nav className="menu">
        <Link to="/viagens">Ver minhas viagens</Link>
      </nav>
    </main>
  );
}

export default Inicio;
