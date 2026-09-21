function Card({titulo,Children}){
    return(
<div className="card">
    <h3>{titulo}</h3>
    <div className="card-conteudo">
        {Children}
    </div>
</div>
    )
}

export default Card