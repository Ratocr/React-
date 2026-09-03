import Caixa from "./Caixa";
import Card from "./Card";

function Destaques() {
  return (
    <section className="destaques">
      <h2>Destaques</h2>
      <Card titulo="Oferta Especial">
        <p>Capuccino com 20% de desconto.</p>
      </Card>
      <Card titulo="Novidade">
        <p>Conheça nosso Mocha</p>
      </Card>
      <Caixa titulo="Caixa">
        <p>Este texto será renderizado no centro da caixa!</p>
        <strong>Caixinha de musica</strong>
      </Caixa>
    </section>
  );
}
export default Destaques;
