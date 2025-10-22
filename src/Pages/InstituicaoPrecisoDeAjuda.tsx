import style from "../Style/saulo.module.css";
import avatar from '../assets/icons/Generic-avatar.svg'
import coracao from '../assets/icons/coracao.svg'
import Alertatriangulo from '../assets/icons/Alertatriangulo.svg'
import casa from '../assets/icons/casa.svg'
import circulo from '../assets/icons/left-circle.svg'
import logo from '../assets/imagens/logoSemFundo.png'


const cards = [
  {
    titulo: "Depressão",
    cor: "#FCEFE6",
    corBtn: "#D9A97C",
    corIcon: "#D9A97C",
  },
  {
    titulo: "Ansiedade",
    cor: "#E6F6FC",
    corBtn: "#7CC1E4",
    corIcon: "#7CC1E4",
  },
  {
    titulo: "TDAH",
    cor: "#E6E6F6",
    corBtn: "#A9A9DB",
    corIcon: "#A9A9DB",
  },
  {
    titulo: "TOC",
    cor: "#E6FCE6",
    corBtn: "#8ED9A1",
    corIcon: "#8ED9A1",
  },
  {
    titulo: "Esquizofrenia",
    cor: "#ECE6FC",
    corBtn: "#B18ED9",
    corIcon: "#B18ED9",
  },
  {
    titulo: "Transtorno alimentar",
    cor: "#FCE6E6",
    corBtn: "#D97C7C",
    corIcon: "#D97C7C",
  },
  {
    titulo: "Tipo de Abuso",
    cor: "#FCFCE6",
    corBtn: "#D9D97C",
    corIcon: "#D9D97C",
  },
];

function InstituicaoAjuda() {
  return (

    <div className={style.container_cabecalho}> 

                <aside className={style.sidebar}>

                    <div className={style.logo_container}>
                        <img className={style.logo} src={logo} alt="Logo LAR" />
                        <div>
                            <h1 className={style.logo_title}>LAR</h1>
                            <p className={style.text_logo}>Lugar de Apoio e Recomeço</p>
                        </div>
                    </div>

                        <nav className={style.menu}>
                            <div className={style.menu_filho}>
                                <div className={style.avatar}>
                                    <img src={avatar} alt="avatar-login" />
                                    <a href="/login">Login</a><br/>
                                </div>
                                
                                <div className={style.avatar}>
                                    <img src={coracao} alt="coracao"/>
                                    <a href="instituicao-ajuda" >Preciso de ajuda</a>                                  
                                </div>
                                <div className={style.avatar}>
                                    <img src={casa} alt="casa"/>
                                    <a href="/instituicao">Instituições</a>                                   
                                </div>
                                <div className={style.avatar}>
                                    <img src={Alertatriangulo} alt="triangulo"/>
                                    <a href="/sos">S.O.S</a>
                                </div>
                            </div>

                            <div className={style.avatar_circulo}>
                                <img src={circulo} alt="seta-esquerda"/>
                                <a href="/">Pagina Inicial</a>                               
                            </div>
                        </nav>
                </aside>

    <div className={style.instituicaoContainer}>
      
      <main className={style.instituicaoMain}>
        <h1 className={style.instituicaoTitulo}>Você não está sozinho</h1>
        <h2 className={style.instituicaoSubtitulo}>Pequenos passos podem transformar sua vida.</h2>
        <div className={style.cardsGrid}>
          {cards.map((card, idx) => (
            <div
              key={card.titulo}
              className={style.card}
              style={{ background: card.cor }}
            >
              <div className={style.cardIcon} style={{ color: card.corIcon }}>
                <span style={{ fontSize: 32 }}>♡</span>
              </div>
              <h3 className={style.cardTitulo}>{card.titulo}</h3>
              <p className={style.cardDesc}>
                Clique no botão abaixo para encontrar recursos e apoio relacionados a {card.titulo}.
                 <br />
              </p>
              <button className={style.cardBtn} style={{ background: card.corBtn }}> Preciso de Ajuda </button>
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  );
}

export default InstituicaoAjuda;