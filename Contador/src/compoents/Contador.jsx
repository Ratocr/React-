import { useState } from "react";

function Contador() {
const [numero,setNumero] = 
    useState(0);

    function aumentar(){
       setNumero (numero + 1 )
    }

    function diminuir(){
        setNumero(numero - 1)
    }

    function zerar(){
        setNumero(0)
    }

  return (
    <section>
      <h2>Contador</h2>
      <p>Valor: {numero} </p>

      <button onClick={aumentar}>
        Aumentar
        </button>

        <button onClick={diminuir}>
            Diminuir
        </button>

        <button onClick={zerar}>
            Zerar
        </button>
    </section>
  );
}
export default Contador;
