import React from 'react';

function StatusInscricao() { 
  let inscrito = true; 

  function verificarInscricao(status) { 
    if (status) { 
      return "Inscrição confirmada"; 
    } else { 
      return "Inscrição pendente"; 
    } 
  } 

  return (
   <div className="status-inscricao">
    <p>{verificarInscricao(inscrito)}</p>
   </div>
  );
}

export default StatusInscricao;
