function Produto({nome,preco,descricao}){
    return(
        <div className="produto">
            <h3>{nome}</h3>
            <strong> {preco}</strong>
            <p>{descricao}</p>

        </div>
    )
}

export default Produto