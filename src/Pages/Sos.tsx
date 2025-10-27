import { Link } from 'react-router-dom'
import imagem from '../assets/imagens/SOS.jpg'
import style from '../Style/sos.module.css'
function Sos() {

  return (
    <>
    <header className={style.tudo}>
      <div className={style.cabecalho}>
        <Link to={"/login"} className={style.hiperlink}>Login</Link>
        <Link to={"/queroajudar"} className={style.hiperlink}>Quero Ajudar</Link>
        <Link to={"/instituicao-ajuda"} className={style.hiperlink}>Preciso de Ajuda</Link>
      </div>

      <div className={style.container}>
        <div className={style.conteudo}>
          <h1 className={style.titulo}>Ajuda urgente?</h1>
          <p className={style.texto}>Clique no botão em que se encaixa a sua situação e será direcionado para a ligação!</p>
          <hr className={style.linha} /> 


          <div className={style.blocoTotal}>
            <div className={style.bloco}>
              <p className={style.numero}> 190</p>

              <p className={style.descricao}><b>Polícia:</b> Quando uma pessoa estiver agressiva, ameçandos e demais situações que representam riscos à vida.</p>
              
              <a href="tel:190" className={style.botao}>Clique aqui</a>
            </div>


            <div className={style.bloco}>
              <p className={style.numero}> 193</p>

              <p className={style.descricao}><b>Bombeiro:</b> Situações de emergência que envolvem traumas, ferimentos ou tentativa de suicidio.</p>
              
              <a href="tel:193" className={style.botao}>Clique aqui</a>
            </div>


            <div className={style.bloco}>
              <p className={style.numero}> 188</p>

              <p className={style.descricao}><b>Centro de Valorização a Vida:</b> Oferece apoio emocional e e prevenção ao suicídio. Gratuito e funcionamento 24hrs</p>
              
              <a href="tel:188" className={style.botao}>Clique aqui</a>
            </div>


            <div className={style.bloco}>
              <p className={style.numero}> 180</p>

              <p className={style.descricao}><b>Central de atendimento à Mulher:</b> em caso de violência contra a Mulher. Serviço Gratuito e funcionamento 24hrs</p>
              
              <a href="tel:180" className={style.botao}>Clique aqui</a>
            </div>

          </div>
        </div>
            <p className={style.textoFinal}>Caso o botão não esteja funcionando em seu aparelho digite o numero que desejar (190, 193, 180 ou 188) no APP Telefone.</p>


      </div>


      <img src={imagem} className={style.imagem} />
    </header>
    </>
  )
}

export default Sos
