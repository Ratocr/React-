import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogIn,FiEyeOff,FiEye} from "react-icons/fi";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const[mostrarSenha,setMostrarSenha] = useState(false)
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const EMAIL_CORRETO = "admin@loja.com";
  const SENHA_CORRETA = "1234";

  function fazerLogin(event) {
    event.preventDefault();

    console.log("E-mail informado", email);
    console.log("Senha informada", senha);

     if (email.trim() === "" || senha.trim() === "") {
    setErro("Preencha o e-mail e a senha");
    return;
  }

    if (email === EMAIL_CORRETO && senha === SENHA_CORRETA) {
      console.log("Login realizado com sucesso");

      setErro("");
      navigate("/dashboard");
    } 
    
    else {
      setErro("E-mail ou senha incorretos");
    }
    
  }

  
  function mensagemErro(){
    if(erro !== ''){
      return <p>{erro}</p>
    }
    return null
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>AdminStore</h1>

        <p>Acesso administrativo</p>

        <form onSubmit={fazerLogin}>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
  
          <div className="campo-senha">
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button
              type="button"
              className="botao-olho"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            
            >
              {mostrarSenha ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button type="submit">
            <FiLogIn />
            Entrar
          </button>
        </form>

        {mensagemErro()}


        <small>E-mail: admin@loja.com | Senha:1234</small>
      </section>
    </main>
  );
}

export default Login;
