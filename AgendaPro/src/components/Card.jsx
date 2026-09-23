// funcão que recebe 3 props e uma children 

function Card({
  titulo,
  descricao,
  valor,
  children
}) {
  return (
    <div className="card">
      <div className="card-icone">
         {/* mostra o prop titulo e também a primeira letra */}
        {titulo.charAt(0)}
      </div>
        {/* Tag título que exibe o valor da prop "titulo"  */}
      <h3>{titulo}</h3>
      {/* Tag parágrafo que exibe o valor da propriedade "descricao"  */}
      <p>{descricao}</p>
      <strong className="card-valor">
        {/* mostra o prop descricao*/}
        R$ {valor}
        
      </strong>
      {/* Mostra qualquer conteúdo que for passado dentro da tag deste componente */}
      {children}
    </div>
  );
}

// Exporta o componente Profissional para que ele possa ser importado e usado em outros arquivos.
export default Card;
