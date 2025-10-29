import { Link } from "react-router-dom";
import style from "../Style/saulo.module.css";
import ilustracao from "../assets/imagens/Formulario.jpg";
import type { PrecisoAjuda } from "../types/precisoAjuda";
import { useEffect, useState, type ChangeEvent } from "react";
import { api } from "../Api/api";

function FormQueroAjuda() {

    const [_, setPrecisoAjuda] = useState<PrecisoAjuda[]>([]);
    // const [loading, setLoading] = useState(false);

    // const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
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

    const handleAssuntoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAssunto(e.target.value)
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
        if (name && telefone && email && assunto && instituicao && cidade && estado) {
            let json = await api.AdicionarFormularioPrecisoAjuda(name, telefone, email, assunto, instituicao, cidade, estado);
            if (json.data.id) {
                alert('Formulario enviado com sucesso!')
                setPrecisoAjuda((PrecisoAjuda) => [...PrecisoAjuda, json] );
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
        <Link to={"/queroajudar"} className={style.divBto}>
          Quero Ajudar
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
              <label>Assunto</label>
              <input type="text" onChange={handleAssuntoChange} placeholder="Digite a doença" />
            </div>
          </div>
          <div className={style.linhaInputs}>
            <div>
              <label>Instituição</label>
              <input type="text" onChange={handleInstituicaoChange} placeholder="Qual instituição" />
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
          <div className={style.checkboxGrupo}>
            <p>
              <strong>O que você sente?</strong>
            </p>
            <br />
            <div className={style.checkboxColunas}>
              <div>
                <label>
                  <input type="checkbox" /> Tremor
                </label>
                <label>
                  <input type="checkbox" /> Cansaço
                </label>
                <label>
                  <input type="checkbox" /> Desânimo
                </label>
                <label>
                  <input type="checkbox" /> Falta de ar
                </label>
                <label>
                  <input type="checkbox" /> Agonia
                </label>
                <label>
                  <input type="checkbox" /> Falta de foco
                </label>
                <label>
                  <input type="checkbox" /> Alteração de humor
                </label>
                <label>
                  <input type="checkbox" /> Sensação de desconexão
                </label>
                <label>
                  <input type="checkbox" /> Preocupação com peso
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Perda de interesse
                </label>
                <label>
                  <input type="checkbox" /> Sofri abuso psicológico
                </label>
                <label>
                  <input type="checkbox" /> Sofri abuso físico
                </label>
                <label>
                  <input type="checkbox" /> Sofri abuso sexual
                </label>
                <label>
                  <input type="checkbox" /> Sofri abuso patrimonial
                </label>
                <label>
                  <input type="checkbox" /> Sofri abuso moral
                </label>
              </div>
            </div>
          </div>
        </form>
        <div>
          <button className={style.botaoEnviar} onClick={AdicionarPost} >Enviar</button>
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
export default FormQueroAjuda;
