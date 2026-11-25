function Filtros({ filtro, setFiltro }) {
  return (
    <div className="filtros">
      <button
        type="button"
        className={filtro === "todos" ? "ativo" : ""}
        onClick={() => setFiltro("todos")}
      >
        Todos
      </button>

      <button
        type="button"
        className={filtro === "assistidos" ? "ativo" : ""}
        onClick={() => setFiltro("assistidos")}
      >
        Assistidos
      </button>

      <button
        type="button"
        className={filtro === "pendentes" ? "ativo" : ""}
        onClick={() => setFiltro("pendentes")}
      >
        Quero assistir
      </button>
    </div>
  );
}

export default Filtros;
