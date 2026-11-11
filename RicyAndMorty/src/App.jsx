
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Personagens from './pages/Personagens'
import DetalhesRickAndMorty from './pages/DetalhesRickAndMorty'

function App() {
  

  

  return (
   <Routes>
   <Route path='/' element={<Personagens/>} />
   <Route path='/personagem/:id' element={<DetalhesRickAndMorty/>} />
</Routes>
  )
}

export default App
