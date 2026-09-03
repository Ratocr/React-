import Produto from "./Produto";

function Produtos() {
    return (
        <section className="produtos">
            <h2>Nossos produtos</h2>

            <Produto categoria='Bebidas Quentes'/>
            
            <Produto
             nome= 'Espresso'
             preco = '15.99'
             descricao = 'teste descrição prod 1'
             />

            <Produto 
            nome= 'Cappuccino'
            preco = '18,99'
            descricao = 'teste descricao prod 2'
            />

            <Produto nome= 'Chocolate'
            preco = '22,00'
            descricao = 'teste descricao prod 2'
            />

            <Produto nome= 'Latte'
            preco = '18,00'
            descricao = 'Latte com base de leite integral com café espresso'
            />

            <Produto nome= 'Mocha'
            preco = '26,00'
            descricao = 'Mocha com base de leite integral com café espresso e chocolate'
            />

            <Produto categoria='Bebidas Geladas'/>

            <Produto nome= 'Chá Gelado'
            preco = '24,00'
            descricao = 'Chás artesanais Kurtea'
            />
            
        </section>
    );
}

export default Produtos;