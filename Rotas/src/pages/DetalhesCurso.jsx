import { Link,useParams } from "react-router-dom";

function DetalhesCurso({cursos}) {
    const {id} = useParams();
    const cursoEncontrado = cursos.find(
        (curso) => curso.id === Number(id)
    );

    if(!cursoEncontrado){
        return(
            <main>
                <h1>Curso não encontrado</h1>

                <Link to ='/'>
                    Voltar para o início
                </Link>
            </main>
        )
    }

  return (
    <main>
        <h1>{cursoEncontrado.nome}</h1>
        <p>
            Carga horária: {cursoEncontrado.cargaHoraria}
        </p>

        <p>
            {cursoEncontrado.descricao}
        </p>

        <Link to = '/'>
            Votar para o início 
        </Link>
    </main>
  )
}

export default DetalhesCurso
