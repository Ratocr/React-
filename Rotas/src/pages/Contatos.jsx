import React from 'react'

function Contatos() {
  return (
    <div>
      <form >
        <input type="email"
        placeholder='Digite o seu e-mail' />

        <input type="number"
        placeholder='Digite seu número de telefone' />

        <button type='submit'> Enviar</button>
      </form>
    </div>
  )
}

export default Contatos
