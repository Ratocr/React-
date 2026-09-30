import { useState } from 'react'
import Carrinho from './components/Carrinho'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Carrinho/>
  )
}

export default App
