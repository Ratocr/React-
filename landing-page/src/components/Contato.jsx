import Input from "./Input";

function Contato() {
  return (
    <section className="entre-contato">
      <h2>Entre em Contato</h2>
      <form>
        <Input
          label="Nome"
          type="text"
          id="nome"
          placeholder="Digite seu nome"
        />

        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
        />

        <Input
          label="Assunto"
          type="text"
          id="Assunto"
          placeholder="Digite o assunto "
        />

        <Input
          label="Telefone"
          type="number"
          id="telefone"
          placeholder="(XX) 9 XXXX-XXXX"
        />

        <Input
          label="Cidade"
          type="text"
          id="cidade"
          placeholder="Ex: Brasília"
        />

        <button>Enviar mensagem</button>
      </form>
    </section>
  );
}

export default Contato;
