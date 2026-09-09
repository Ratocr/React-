function Card({titulo,children}){
    return(
        <div>
            <h3>{titulo}</h3>

            <div className="card-conteudo">
                {children}
            </div>
        </div>
    )
}

export default Card;