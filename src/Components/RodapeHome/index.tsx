import style from './style.module.css'
import facebook from '../../assets/imagens/facebook.png'
import github from '../../assets/imagens/gitHub.png'
import instagram from '../../assets/imagens/Instagram.png'
import { Link } from 'react-router-dom'
import PoliticaPrivacidade from '../../Documentacao/PoliticadePrivacidadeLAR.pdf'

function RodapeHome() {


    return (
        <div>
            <footer className={style.rodapeHome2}>           
                <div className={style.infoRodape}>
                    {/* <span onClick={handleNavegarPoliticaPrivacidade} className={style.politicaPrivacidade}>
                                <span>POLÍTICA DE PRIVACIDADE   |   FALE CONOSCO</span>
                            </span>  */}
                    <div className={style.link}>
                        <a href={PoliticaPrivacidade} target="_blank" className={style.politicaPrivacidade}>
                            <span>POLÍTICA DE PRIVACIDADE</span>
                        </a>
                        <div className={style.linha} />
                        <Link to={"/faleConosco"} className={style.faleconosco}> FALE CONOSCO </Link>
                    </div>
                    <div className={style.criadoLar}>
                        <span>© 2025 - CRIADO POR LAR - Lugar de apoio e recomeço. </span>
                    </div>
                </div>

                <div className={style.redesRodape}>
                    <div className={style.redesSociais}>
                        <a href="https://web.facebook.com/" target='blank'><img src={facebook} alt="facebook" className={style.logotipos} /></a>
                        <a href="https://www.instagram.com/" target='blank'><img src={instagram} alt="instagram" className={style.logotipos} /></a>
                        <a href="https://github.com/BiaNovaes/LAR.git" target='blank'><img src={github} alt='GitHub' className={style.logotipos} /></a>
                    </div>
                    <div className={style.lar}>
                        <span>LAR - Lugar de Apoio e Recomeço</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default RodapeHome