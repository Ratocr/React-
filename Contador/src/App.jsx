import { useState } from 'react'
import Contador from './compoents/Contador'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Contador/>
  )
}

export default App
