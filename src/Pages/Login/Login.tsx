import Cabecalho from "../../Components/Cabecalho";
import Rodape from "../../Components/Rodape";
import { useEffect, useState, type ChangeEvent } from "react";
import style from "./styles.module.css";
import { Link } from "react-router-dom";
import { api } from "../../Api/api";

function Login() {
  const [login, setLogin] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value)
  }
 
  async function criacaoDeLogin() {
    if (login === "Login") {
      const Login = await api.Logar(email, senha)
      return Login;

    } else {
      const Cadastro = await api.Cadastro(name, email, senha)
      return Cadastro;
    }
  }
  useEffect(() => {

  criacaoDeLogin()
  },[])

  

  return (
    <div className={style.containerLogin}>
      <Cabecalho />

      <div className={style.loginGeral}>
        <form className={style.loginCard}>
          <div className={style.bemVindo}>
            <p>BEM-VINDO</p>
            <span>Estamos aqui para te apoiar.</span>
          </div>
          <div className={style.form}>
            <div className={style.formDiv}>
              {login === "Login" ? (
                <></>
              ) : (
                <div className={style.email}>
                  <label>Nome:</label>{" "}
                  <input 
                    onChange={handleName}
                  
                    className={style.divInput}
                    type="text"
                    placeholder="Digite seu nome"
                  />
                </div>
              )}

              <div className={style.email}>
                <label>E-mail:</label>{" "}
                <input
                onChange={handleEmail}
                  className={style.divInput}
                  type="email"
                  placeholder="Digite seu email"
                />
              </div>
              <div className={style.email}>
                <label>Senha:</label>{" "}
                <input
                onChange={handlePassword}
                  className={style.divInput}
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>
            <div className={style.esqueciSenha}>
              <Link to={"/esqueci-senha"} className={style.botaoCadastro}>
                Esqueci a senha
              </Link>
            </div>
          </div>

          <div className={style.containerCadastreSe}>
            <button>{login === "Login" ? "Entrar" : "Cadastrar"}</button>
          </div>

          {login === "Login" ? (
            <div className={style.cadastreSe}>
              <p>Não tem uma conta? </p>{" "}
              <span
                onClick={() => setLogin("Cadastre-se")}
                className={style.botaoCadastro}
              >
                Cadastre-se
              </span>
            </div>
          ) : (
            <div className={style.cadastreSe}>
              <p> Já tenho uma conta. </p>{" "}
              <span
                onClick={() => setLogin("Login")}
                className={style.botaoCadastro}
              >
                Login
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
