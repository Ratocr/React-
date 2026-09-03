function Bannertexto({ titulo, destaque, descricao }) {
  return (
    <div className="bannertexto">
      <p>{titulo}</p>
      <h2>{destaque}</h2>
      <span>{descricao}</span>
    </div>
  );
}

export default Bannertexto;
