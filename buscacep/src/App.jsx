import { useState } from "react";
import BuscaCep from "./components/BuscaCep";
import Resultado from "./components/Resultado";

function App() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [erro, setErro] = useState("");

  async function buscarCep() {
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setErro("Digite um CEP com oito números");
      return;
    }

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      // RES,JASON =  FORMATO DE OBJETO {}
      const dados = await res.json();

      if (dados.erro) {
        setErro("CEP não encontrado");
        return;
      }

      setEndereco(dados);

    } catch (error) {
      setErro ('Não foi possível consultar o CEP');
    }
  }

  return (
    <div>
      <h1>Buscar Endereço</h1>
      <BuscaCep cep = {cep} setCep = {setCep} buscarCep= {buscarCep}/>
      <Resultado endereco={endereco}/>
      {erro && <p>{erro}</p>}
    </div>
  )
}

export default App;
