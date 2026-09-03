function Caixa ({titulo, children}){
    return (
       <div className="caixa">
        <h3>{titulo}</h3>
        <div className="conteudo-caixa">
            {children}
        </div>
       </div>
    )
}

export default Caixa;
