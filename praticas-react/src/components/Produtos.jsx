import Produto from "./Produto";

function Produtos() {
    return (
        <section className="produtos">
            <h2>Nossos produtos</h2>
            
            <Produto
             nome= 'Espresso'
             preco = '15.99'
             descricao = 'teste descrição prod 1'
             />

            <Produto nome= 'Cappuccino'
            preco = '18,99'
            descricao = 'teste descricao prod 2'
            />

            <Produto nome= 'Chocolate'
            preco = '22,00'
            descricao = 'teste descricao prod 2'
            />
            
        </section>
    );
}

export default Produtos;