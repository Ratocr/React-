function Filtros({filtro,setFiltro}) {
  return (
   <div className="filtros">
    <button
    type='button'
    className={filtro === "todos"? "ativo": ""}
    onClick={()=> setFiltro("todos")}
    >
      Todos
    </button>

    <button
    type='button'
    className={filtro === "lido"? "ativo" : ""}
    onClick={() => setFiltro("lidos")}>
      Lidos
    </button>

    <button
    type='button'
    className={filtro === "pendentes"? 'ativo' : ''}
    onClick={() => setFiltro('pendentes')}>
      Quero ler 
    </button>

   </div>
  )
}

export default Filtros
