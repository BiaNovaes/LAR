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
    
    // Criação dos imputs checkbox

    const [tremor, setTremor] = useState(false);
    const [cansaco, setCansaco] = useState(false);
    const [desanimo, setDesanimo] = useState(false);
    const [faltaAr, setFaltaAr] = useState(false);
    const [agonia, setAgonia] = useState(false);
    const [faltaFoco, setFaltaFoco] = useState(false);
    const [alteracaoHumor, setAlteracaoHumor] = useState(false);
    const [sensacaoDesconexao, setSensacaoDesconexao] = useState(false);
    const [preocupacaoPeso, setPreocupacaoPeso] = useState(false);
    const [perdaInteresse, setPerdaInteresse] = useState(false);
    const [abusoPsicologico, setAbusoPsicologico] = useState(false);
    const [abusoFisico, setAbusoFisico] = useState(false);
    const [abusoSexual, setAbusoSexual] = useState(false);
    const [abusoPatrimonial, setAbusoPatrimonial] = useState(false);
    const [abusoMoral, setAbusoMoral] = useState(false);



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

// Criação dos handlers checkbox

    const handleTremorChange = (e: ChangeEvent<HTMLInputElement>) => {
            setTremor(e.target.checked)
        }

    const handleCansacoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setCansaco(e.target.checked)
        }

    const handleDesanimoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setDesanimo(e.target.checked)
        }

    const handleFaltaArChange = (e: ChangeEvent<HTMLInputElement>) => {
            setFaltaAr(e.target.checked)
        }

    const handleAgoniaChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAgonia(e.target.checked)
        }

    const handleFaltaFocoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setFaltaFoco(e.target.checked)
        }

    const handleAlteracaoHumorChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAlteracaoHumor(e.target.checked)
        }

    const handleSensacaoDesconexaoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setSensacaoDesconexao(e.target.checked)
        }

    const handlePreocupacaoPesoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setPreocupacaoPeso(e.target.checked)
        }

    const handlePerdaInteresseChange = (e: ChangeEvent<HTMLInputElement>) => {
            setPerdaInteresse(e.target.checked)
        }
      
    const handleAbusoPsicologicoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAbusoPsicologico(e.target.checked)
        }

    const handleAbusoFisicoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAbusoFisico(e.target.checked)
        }

    const handleAbusoSexualChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAbusoSexual(e.target.checked)
        }

    const handleAbusoPatrimonialChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAbusoPatrimonial(e.target.checked)
        }

    const handleAbusoMoralChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAbusoMoral(e.target.checked)
        }

    const AdicionarPost = async () => {
        if (name && telefone && email && assunto && instituicao && cidade && estado) { 
            let json = await api.AdicionarFormularioPrecisoAjuda(name, telefone, email, assunto, instituicao, cidade, estado, tremor, cansaco);
            if (json.data?.id) {
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
                  <input type="checkbox" onChange={handleTremorChange} /> Tremor
                </label>
                <label>
                  <input type="checkbox" onChange={handleCansacoChange} /> Cansaço
                </label>
                <label>
                  <input type="checkbox" onChange={handleDesanimoChange} /> Desânimo
                </label>
                <label>
                  <input type="checkbox" onChange={handleFaltaArChange} /> Falta de ar
                </label>
                <label>
                  <input type="checkbox" onChange={handleAgoniaChange} /> Agonia
                </label>
                <label>
                  <input type="checkbox" onChange={handleFaltaFocoChange} /> Falta de foco
                </label>
                <label>
                  <input type="checkbox" onChange={handleAlteracaoHumorChange} /> Alteração de humor
                </label>
                <label>
                  <input type="checkbox" onChange={handleSensacaoDesconexaoChange} /> Sensação de desconexão
                </label>
                <label>
                  <input type="checkbox" onChange={handlePreocupacaoPesoChange} /> Preocupação com peso
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" onChange={handlePerdaInteresseChange} /> Perda de interesse
                </label>
                <label>
                  <input type="checkbox" onChange={handleAbusoPsicologicoChange} /> Sofri abuso psicológico
                </label>
                <label>
                  <input type="checkbox" onChange={handleAbusoFisicoChange} /> Sofri abuso físico
                </label>
                <label>
                  <input type="checkbox" onChange={handleAbusoSexualChange} /> Sofri abuso sexual
                </label>
                <label>
                  <input type="checkbox" onChange={handleAbusoPatrimonialChange} /> Sofri abuso patrimonial
                </label>
                <label>
                  <input type="checkbox" onChange={handleAbusoMoralChange} /> Sofri abuso moral
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
