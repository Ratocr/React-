import Card from "./Card";

function Depoimento(){
    return(
        <section className="depoimento">
            <h2>Depoimentos</h2>

            <div className="cards">
            <Card titulo='Ana'>
                <p>Gostei muito das aulas práticas.</p>
                <p>★★★★★</p>
            </Card>

            <Card titulo = "Lucas">
                <p>Finalmente comecei a entender React.</p>
                <p>★★★★★</p>
            </Card>

            <Card titulo = "Marina">
                <p>Os projetos me ajudaram bastante.</p>
                <p>★★★★☆</p>

            </Card>

            <Card titulo = "Pedro">
                <p>Graças a codeSTART consegui mudar de área.</p>
                <p>★★★★★</p>

            </Card>
            

        </div>
        </section>
    )
}

export default Depoimento