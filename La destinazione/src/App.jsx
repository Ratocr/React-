import { Route, Routes } from "react-router";
import "./App.css";
import Inicio from "./pages/Inicio";
import Detalhes from "./pages/Detalhes";
import Viagens from "./pages/Viagens";
import Error from "./pages/Error";
import NavBar from "./pages/NavBar";
import { useState } from "react";

function App() {
  const [minhasViagens, setMinhasViagens] = useState([
    {
      id: 1,
      destino: "Brasilia",
      dataIda: "12/08/2028",
      dataVolta: "22/08/2028",
      orcamento: "500,00",
      atividades: "Congresso e Museu",
    },
    {
      id: 2,
      destino: "Rio de Janeiro",
      dataIda: "12/08/2027",
      dataVolta: "22/08/2027",
      orcamento: "800,00",
      atividades: "Cristo e bondinho",
    },
  ]);

  return (
    <div className="header">
      <NavBar />

      <Routes>
        <Route path="/" element={<Inicio minhasViagens={minhasViagens} />} />

        <Route
          path="/viagens/:id"
          element={<Detalhes minhasViagens={minhasViagens} />}
        />

        <Route
          path="/viagens"
          element={
            <Viagens
              minhasViagens={minhasViagens}
              setMinhasViagens={setMinhasViagens}
            />
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
