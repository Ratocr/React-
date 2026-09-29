function BuscaCep({ cep, setCep, buscarCep }) {
  return (
    <div>
      <input
        id="cep"
        type="text"
        placeholder=" ex : 0100100"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />

        <button onClick={buscarCep}>
            Procurar
        </button>
    </div>
  );
}

export default BuscaCep;
