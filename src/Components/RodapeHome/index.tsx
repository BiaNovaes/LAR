import style from './style.module.css'
import facebook from '../../assets/imagens/facebook.png'
import github from '../../assets/imagens/Github.png'
import instagram from '../../assets/imagens/Instagram.png'

function RodapeHome() {
   

    return (
        <div>
            <footer className={style.rodapeHome2}>
                     
                        <div className={style.infoRodape}>
                            <span className={style.politicaPrivacidade}>
                                <span>POLÍTICA DE PRIVACIDADE   |   FALE CONOSCO</span>
                            </span> 
                            <div className={style.criadoLar}>
                                <span>© 2025 - CRIADO POR LAR - Lugar de apoio e recomeço. </span>
                            </div> 
                        </div> 

                        <div className={style.redesRodape}>
                                <div  className={style.redesSociais}>
                                    <a href="https://web.facebook.com/" target='blank'><img src={facebook} alt="facebook" /></a>
                                    <a href="https://github.com/" target='blank'><img src={github} alt="github" /></a>
                                    <a href="https://www.instagram.com/" target='blank'><img src={instagram} alt="instagram" /></a> 
                                </div> 
                                <div  className={style.lar}>
                                    <span>LAR - Lugar de Apoio e Recomeço</span>
                                </div>
                        </div>
            </footer>
        </div>
    )
}

export default RodapeHome