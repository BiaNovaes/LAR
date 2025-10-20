
import styles from '../Style/milton.module.css'
import lupa from '../assets/icons/icone-lupa.svg'
import avatar from '../assets/icons/Generic-avatar.svg'
import coracao from '../assets/icons/coracao.svg'
import Alertatriangulo from '../assets/icons/Alertatriangulo.svg'
import casa from '../assets/icons/casa.svg'
import circulo from '../assets/icons/left-circle.svg'
import logo from '../assets/imagens/logoSemFundo.png'
import cvv from '../assets/imagens/cvv.png.png'
import seta_direita from '../assets/icons/seta-direita.svg'
import { useState } from 'react'


function Instituicao (){
    const [card1,setcard1]=useState(false)
    const [card2,setcard2]=useState(false)
    const [card3,setcard3]=useState(false)
    const [card4,setcard4]=useState(false)
    return (
    
        <header>
          
            <div className={styles.container_cabecalho}> 

                <aside className={styles.sidebar}>

                    <div className={styles.logo_container}>
                        <img className={styles.logo} src={logo} alt="Logo LAR" />
                        <div>
                            <h1 className={styles.logo_title}>LAR</h1>
                            <p className={styles.text_logo}>Lugar de Apoio e Recomeço</p>
                        </div>
                    </div>

                        <nav className={styles.menu}>
                            <div className={styles.menu_filho}>
                                <div className={styles.avatar}>
                                    <img src={avatar} alt="avatar-login" />
                                    <a href="/login">Login</a><br/>
                                </div>
                                
                                <div className={styles.avatar}>
                                    <img src={coracao} alt="coracao"/>
                                    <a href="/instituicao-ajuda" >Preciso de ajuda</a>                                  
                                </div>
                                <div className={styles.avatar}>
                                    <img src={casa} alt="casa"/>
                                    <a href="/instituicao">Instituições</a>                                   
                                </div>
                                <div className={styles.avatar}>
                                    <img src={Alertatriangulo} alt="triangulo"/>
                                    <a href="/sos">S.O.S</a>
                                </div>
                            </div>

                            <div className={styles.avatar_circulo}>
                                <img src={circulo} alt="seta-esquerda"/>
                                <a href="/">Pagina Inicial</a>                               
                            </div>
                        </nav>
                </aside>

                <main className={styles.main}>
                    <div className={styles.container_titulo}>
                        <h2 className={styles.titulo}>INSTITUIÇÕES</h2>
                        <div className={styles.container_pesquisa}><input className={styles.pesquisa} type="text" placeholder="Pesquisar Instituição" />
                            <img src={lupa} alt="Lupa de pesquisa" />
                        </div>
                    </div>
                    
                    <div className={styles.container_select}>
                        
                          
                            <button className={styles.grid} value="volvo">Filtro</button>
                            <button className={styles.grid} value="volvo">Depressão</button>
                            <button className={styles.grid} value="volvo">Ansiedade</button>
                            <button className={styles.grid} value="volvo">T. Alimentar</button>
                            <button className={styles.grid} value="volvo">TDH</button>
                            <button className={styles.grid} value="volvo">TOC</button>
                            <button className={styles.grid} value="volvo">Esquizofrênia</button>
                       
                    </div>
                    

                    <div className={styles.principal_box}>
                        <div className={styles.box}>
                            <img className={styles.imagemcvv} src={cvv} alt="Apoio emocional" />
                            <p className={styles.textocvv}>
                                Centro de Valorização da Vida é um serviço voluntário gratuito de apoio emocional e prevenção do suicídio para todas as pessoas que querem e precisam conversar, sob total sigilo e anonimato.
                            </p>
                            <div className={styles.container_button}>
                                <button className={styles.button}>
                                    <div> Saiba mais</div>
                                    <img src={seta_direita} alt="seta_direita" />

                                </button>
                                    <button onMouseEnter={()=>setcard1(true)}onMouseLeave={()=>setcard1(false)} className={styles.button}>
                                        <div>Fazer doação</div>
                                        {!card1?<img src={seta_direita} alt="seta_direita" />:<img src={coracao} alt='coracao'/>}
            
                                    </button>
                                    
                            </div>
                           
                        </div>
                        <div className={styles.box}>
                              <img className={styles.imagemcvv} src={cvv} alt="Apoio emocional" />
                            <p className={styles.textocvv}>
                                Centro de Valorização da Vida é um serviço voluntário gratuito de apoio emocional e prevenção do suicídio para todas as pessoas que querem e precisam conversar, sob total sigilo e anonimato.
                            </p>
                            <div className={styles.container_button}>
                                     <button className={styles.button}>
                                    <div> Saiba mais</div>
                                    <img src={seta_direita} alt="seta_direita" />

                                </button>
                                   <button onMouseEnter={()=>setcard2(true)}onMouseLeave={()=>setcard2(false)} className={styles.button}>
                                        <div>Fazer doação</div>
                                        {!card2?<img src={seta_direita} alt="seta_direita" />:<img src={coracao} alt='coracao'/>}
            
                                    </button>
                            </div>
                           
                        </div>
                        <div className={styles.box}>
                              <img className={styles.imagemcvv} src={cvv} alt="Apoio emocional" />
                            <p className={styles.textocvv}>
                                Centro de Valorização da Vida é um serviço voluntário gratuito de apoio emocional e prevenção do suicídio para todas as pessoas que querem e precisam conversar, sob total sigilo e anonimato.
                            </p>
                            <div className={styles.container_button}>
                                <button className={styles.button}>
                                    <div> Saiba mais</div>
                                    <img src={seta_direita} alt="seta_direita" />

                                </button>
                                   <button onMouseEnter={()=>setcard3(true)}onMouseLeave={()=>setcard3(false)} className={styles.button}>
                                        <div>Fazer doação</div>
                                        {!card3?<img src={seta_direita} alt="seta_direita" />:<img src={coracao} alt='coracao'/>}
            
                                    </button>
                            </div>
                           
                        </div>
                        <div className={styles.box}>
                              <img className={styles.imagemcvv} src={cvv} alt="Apoio emocional" />
                            <p className={styles.textocvv}>
                                Centro de Valorização da Vida é um serviço voluntário gratuito de apoio emocional e prevenção do suicídio para todas as pessoas que querem e precisam conversar, sob total sigilo e anonimato.
                            </p>
                            <div className={styles.container_button}>
                                    <button className={styles.button}>
                                    <div> Saiba mais</div>
                                    <img src={seta_direita} alt="seta_direita" />

                                </button>
                                   <button onMouseEnter={()=>setcard4(true)}onMouseLeave={()=>setcard4(false)} className={styles.button}>
                                        <div>Fazer doação</div>
                                        {!card4?<img src={seta_direita} alt="seta_direita" />:<img src={coracao} alt='coracao'/>}
            
                                    </button>
                            </div>
                           
                        </div>
                    </div>
                    

                </main>
                
                

            </div>

        </header>
       
    )
}

export default Instituicao;