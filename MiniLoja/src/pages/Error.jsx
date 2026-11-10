import { Link} from 'react-router-dom'
function Error() {
  return (
    <main className="pagina-erro">
        <h1>Página não encontrada</h1>
        <Link to='/'>Voltar para o início</Link>
    </main>
  )
}

export default Error
