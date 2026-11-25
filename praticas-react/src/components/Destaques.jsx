import Caixa from "./Caixa";
import Card from "./Card";

function Destaques() {
  return (
    <section className="destaques">
      <h2>Destaques</h2>
      <Card titulo="Oferta Especial">
        <h4>Oferta do dia </h4>
        <p>Capuccino com 20% de desconto.</p>
      </Card>

      <Card titulo="Novidade">
        <h4>Novidade da semana</h4>
        <p>Conheça nosso Mocha</p>
      </Card>

      <Card titulo="Horario de Funcionamento">
        <h4>Segunda a Sexta </h4>
        <p>07h as 18h</p>
      </Card>

      <Caixa titulo="Caixa de Café">
        <p>Conheça nossos catuai amarelo</p>
      </Caixa>
      
    </section>
  );
}
export default Destaques;
