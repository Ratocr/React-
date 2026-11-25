import {Link} from 'react-router-dom'

function Menu() {
  return (
    <nav>
        <Link to='/'>Início</Link>
        <Link to ='/contato'>Contato</Link>
    </nav>
  )
}

export default Menu
