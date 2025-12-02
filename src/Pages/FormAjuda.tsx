import { useState } from "react";
import style from "../Style/FormPrecisoAjuda.module.css";
import type { QueroAjudar } from "../types/queroAjudar";
import { useEffect, type ChangeEvent } from "react";
import { api } from "../Api/api";
import BotaoSOS from "../Components/Botao/botao";
import CabecalhoHome from "../Components/CabecalhoHome";
import RodapeHome from "../Components/RodapeHome";
import type { InstituicaoProps } from "../types/instituicao";


function FormAjuda() {

  const [_, setQueroAjudar] = useState<QueroAjudar[]>([]);
  // const [loading, setLoading] = useState(false);

  // const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [valor, setValor] = useState('');
  const [Instituicao_lista, setInstituicao_lista] = useState<InstituicaoProps[]>([]);
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

  const handleInstituicaoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInstituicao(e.target.value)
  }

  const handleCidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCidade(e.target.value)
  }


  const handleEstadoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEstado(e.target.value)
  }



  const AdicionarPost = async () => {
    if (name && telefone && email && valor && cidade && estado) {
      let json = await api.AdicionarFormulario(name, telefone, email, valor, instituicao, cidade, estado);
      if (json?.message === 'Formulario enviado com sucesso!') {
        alert(json.message);
        setQueroAjudar((QueroAjudar) => [...QueroAjudar, json]);
      } else {
        alert('Erro ao enviar formulario!');
      }
    }
  }

  async function listaInstituicoes() {
    const instituicoes = await api.listarInstituicao();
    setInstituicao_lista(instituicoes);
  }


  useEffect(() => {
    // carregarFormulario();
    listaInstituicoes();
  }, []);


  return (
    <div className={style.body}>
      <CabecalhoHome />
      <div className={style.divFormGeral}>
        <div className={style.sidebar}>
          <h2>Olá!</h2>

          <div className={style.alertInfo}>
            <strong>Antes de continuar</strong>
            <p>
              Se você tiver dúvidas sobre como funciona o envio da doação ou sobre as
              instituições listadas, nossa equipe está disponível para ajudar.
            </p>
          </div>

          <div className={style.alertInfo}>
            <strong>Instituições parceiras</strong>
            <p>
              Aqui você encontra organizações confiáveis que trabalham diariamente
              para transformar vidas.
            </p>
          </div>

          <div className={style.alertInfo}>
            <strong>Por que doar?</strong>
            <p>
              Sua ajuda permite que nosso trabalho continue impactando vidas. Mesmo
              pequenas contribuições fazem uma grande diferença.
            </p>
          </div>
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
 
                <select onChange={handleInstituicaoChange} defaultValue="">
                <option value="" disabled>
                Selecione a instituição
                </option>
 
                {Instituicao_lista.map((id, index) => (
                  <option key={index} value={id.ID}>
                   {id.EMPRESA}
                </option>
              ))}
                </select>
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
        </div>
        <BotaoSOS />
      </div>
      <RodapeHome />
    </div>
  );
}

export default FormAjuda;
