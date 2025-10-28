import { useState } from "react";
import style from "../Style/saulo.module.css";
import ilustracao from "../assets/imagens/Formulario.jpg";
import { Link } from "react-router-dom";
import type { QueroAjudar } from "../types/queroAjudar";
import { useEffect, type ChangeEvent } from "react";
import { api } from "../Api/api";


function FormAjuda() {
  
   const [queroAjudar, setQueroAjudar] = useState<QueroAjudar[]>([]);
    // const [loading, setLoading] = useState(false);

    // const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [valor, setValor] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    // const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    //         setId(e.target.value)
    //     }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value)
        }
    
    const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
            setTelefone(e.target.value)
        }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
        }

    const handleValorChange = (e: ChangeEvent<HTMLInputElement>) => {
            setValor(e.target.value)
        }

    const handleInstituicaoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setInstituicao(e.target.value)
        }

    const handleCidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
            setCidade(e.target.value)
        }


    const handleEstadoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setEstado(e.target.value)
        }



    const AdicionarPost = async () => {
        if (name && telefone && email && valor && instituicao && cidade && estado) {
            let json = await api.AdicionarFormulario(name, telefone, email, valor, instituicao, cidade, estado);
            if (json.data.id) {
                alert('Formulario enviado com sucesso!')
                setQueroAjudar((QueroAjudar) => [...QueroAjudar, json] );
            } else {
                alert('Erro ao enviar formulario!')
            }
        }
    }

     useEffect(() => {
            // carregarFormulario();
        }, []);

  return (
    <div className={style.divFormGeral}>
      <div className={style.divLateral}>
        <h1>Olá!</h1>
        <hr />
        <p>Estamos felizes por você estar dando esse grande passo.</p>
        <p>
          Calma, tudo vai melhorar só precisamos que você responda o formulário
          para entendermos melhor como podemos te ajudar.
        </p>
        <p>
          Em casos de emergência para assuntos psicológicos ligue para{" "}
          <strong>188</strong> ou <strong>190</strong>.
        </p>
        <p>
          Em casos de emergência para abusos ligue para <strong>188</strong> ou{" "}
          <strong>190</strong>.
        </p>
      </div>
      <div className={style.divFormBto}>
        <Link to={"/"} className={style.divBto}>
          Home
        </Link>
        <Link to={"/precisodeajuda"} className={style.divBto}>
          Preciso de ajuda
        </Link>
        <Link to={"/login"} className={style.divBto}>
          Login
        </Link>
      </div>
      <div className={style.divConteudo}>
        <form className={style.formAjuda}>
          <div className={style.linhaInputs}>
            <div>
              <label>Nome</label>
              <input type="text" onChange={handleNameChange} placeholder="Digite seu nome" />
            </div>
          </div>
          <div className={style.linhaInputs}>
            <div>
              <label>Telefone</label>
              <input type="text" onChange={handleTelefoneChange} placeholder="Digite seu telefone" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" onChange={handleEmailChange} placeholder="Digite seu Email" />
            </div>
          </div>
          <div className={style.linhaInputs}>
            <div>
              <label>Instituição</label>
              <input type="text" onChange={handleInstituicaoChange} placeholder="Qual Instituição" />
            </div>
          </div>
          <div className={style.linhaInputs}>
            <div>
              <label>Valor</label>
              <input
                type="text" onChange={handleValorChange}
                placeholder="Digite o valor que deseja ajudar"
              />
            </div>
          </div>
          <div className={style.linhaInputs}>
            <div>
              <label>Cidade</label>
              <input type="text" onChange={handleCidadeChange} placeholder="Digite o nome da sua cidade" />
            </div>
            <div>
              <label>Estado</label>
              <input type="text" onChange={handleEstadoChange} placeholder="Digite o nome do seu estado" />
            </div>
          </div>
          <div className={style.checkboxGrupo}></div>
        </form>
        <div>
          <button className={style.botaoEnviar} onClick={AdicionarPost}>Enviar</button>
        </div>
        <img
          src={ilustracao}
          alt="Ilustração"
          className={style.ilustracaoDireita}
        />
      </div>
    </div>
  );
}

export default FormAjuda;
