import React from 'react'

function Header({resumo}) {
    const{
        titulo,
        subtitulo,
        total,
        abertos,
        resolvidos
    } = resumo
  return (
 <section className="titulo_resumo">
    <div className="header">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
    </div>
    <div className="resumo_total">
        <h2>Total</h2>
        <p>{total}</p>
    </div>
    <div className="resumo_total">
        <h2>Abertos</h2>
        <p>{abertos}</p>
    </div>
    <div className="resumo_total">
        <h2>Resolvidos</h2>
        <p>{resolvidos}</p>
    </div>
 </section>
  )
}

export default Header
