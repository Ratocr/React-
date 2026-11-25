import { Link } from "react-router-dom"

function Error() {
  return (
    <div>
     <h1>Página não encontrada</h1>
     
     <Link to="/">
      Voltar para o início
     </Link>
    </div>
  )
}

export default Error