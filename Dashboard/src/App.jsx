import { Route,Routes } from 'react-router-dom'

import './App.css'
import Dashboard from './pages/Dashboard'
import Produtos from './pages/Produtos'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      <Route
      path='/'
      element={<Login/>}
      />

      <Route
      path='/dashboard'
      element={<Dashboard/>}
      />

      <Route
      path='/produtos'
      element={<Produtos/>}
      />
    </Routes>
  )
}

export default App
