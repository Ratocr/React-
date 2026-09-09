
function Input({id, label, tipo, placeholder}) {
  return (
    <div className="campo">
      <label htmlFor={nome}>{label}</label>

      <input 
      type={tipo} 
      id={id} 
      placeholder={placeholder} />
    </div>
  );
}

export default Input;
