import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import ControleIngressos from "./components/ControleIngressos";
import Resumo from "./components/Resumo";

function App() {
  const [adultos, setAdultos] = useState(0);
  const [infantis, setInfantis] = useState(0);

  function aumentarAdulto() {
    setAdultos(adultos + 1);
  }

  function diminuirAdultos() {
    if (adultos > 0) {
      setAdultos(adultos - 1);
    }
  }

  function aumentarInfantis() {
    setInfantis(infantis + 1);
  }

  function diminuirInfantis() {
    if (infantis > 0) {
      setInfantis(infantis - 1);
    }
  }

  const totalIngresso = adultos + infantis;
  const valorTotal = adultos * 30 + infantis * 15;

  function limparPedidos() {
    setAdultos(0);
    setInfantis(0);
  }

  return (
    <>
      <Header titulo="CineTicket" subTitulo="Reserve seu ingresso" />

      <main className="container">
        <Card titulo="Ingressos">
          <ControleIngressos
            tipo="Adulto"
            preco={30}
            quantidade={adultos}
            aumentar={aumentarAdulto}
            diminuir={diminuirAdultos}
          />

          <ControleIngressos
            tipo="Infantil"
            preco={15}
            quantidade={infantis}
            aumentar={aumentarInfantis}
            diminuir={diminuirInfantis}
          />
        </Card>

        <Card titulo="Resumo da compra">
          <Resumo
            adultos={adultos}
            infantis={infantis}
            totalIngresso={totalIngresso}
            valorTotal={valorTotal}
            limparPedido={limparPedidos}
          />
        </Card>
      </main>
    </>
  );
}

export default App;
