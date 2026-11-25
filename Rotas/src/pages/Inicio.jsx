import { Link } from "react-router-dom"

function Inicio({cursos}) {
  return (
    <main>
        <h1>Catálogo de cursos</h1>
        <p>Escolha um curso para ver os detalhes.</p>

        {cursos.map((curso) => (
            <article key={curso.id}>
                <h2>{curso.nome}</h2>

                <p>{curso.cargaHoraria}</p>

                <Link to={`/curso/${curso.id}`}>
                    Ver curso
                </Link>
                <hr />
            </article>
        ))}
    </main>
  )
}

export default Inicio
