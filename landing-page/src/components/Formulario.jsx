import Input from "./Inputs";

function Formulario (){
    return(
        <section className="contato" id='contato'>
            <h2>Quero saber mais</h2>
        <form>
            <Input
            label= 'nome'
            tipo = 'text'
            id = 'nome'
            placeholder ='Digite seu nome'
            />

     

        <button>Enviar</button>

        </form>

        </section>
    )
}

export default Formulario;