function Produto({nome,preco,descricao,categoria}){
    return(
        <div className="produto">
            <h3>{categoria}</h3>
            <h4>{nome}</h4>
            <strong> {preco}</strong>
            <p>{descricao}</p>

        </div>
    )
}

export default Produto