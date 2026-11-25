import { Route,Routes } from 'react-router-dom'
import './App.css'
import Pokemon from './pages/Pokemon'
import DetalhesPokemon from './pages/DetalhesPokemon'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Pokemon/>} />
      <Route path='/pokemon/:name' element={<DetalhesPokemon/>} />
      </Routes>
  )
}

export default App
