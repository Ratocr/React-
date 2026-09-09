import Input from "./Inputs";

function Formulario() {
  return (
    <section className="contato" id="contato">
      <h2>Quero saber mais</h2>

      <form>
        <Input
          label="Nome"
          tipo="text"
          id="nome"
          placeholder="Digite seu nome"
        />
        
        <Input
          label="Email"
          tipo="email"
          id="email"
          placeholder="Digite seu e-mail"
        />
        

        <button>Enviar</button>
      </form>
    </section>
  );
}

export default Formulario;
