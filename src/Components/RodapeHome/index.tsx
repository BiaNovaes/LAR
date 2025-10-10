import style from './styles.module.css'
import facebook from '../../assets/imagens/facebook.png'
import instagram from '../../assets/imagens/Instagram.png'

function RodapeHome() {

    return (
        <div>
            <footer className={style.rodapeHome}>

                <div className={style.redesRodape}>
                    <span className={style.redesSociais}>ACOMPANHE O LAR NAS REDES SOCIAIS: 
                        <a href="https://web.facebook.com/" target='blank'><img src={facebook} alt="facebook" /></a>
                        <a href="https://www.instagram.com/" target='blank'><img src={instagram} alt="instagram" /></a>  
                    </span>
                    <br />
                    <span>FALE CONOSCO</span>
                    <br />
                    <span>POLÍTICA DE PRIVACIDADE</span>
                     <br /> <br />

                        <div className={style.criadoLar}>
                            <h1>© 2025 - Criado por LAR  </h1> 
                            <p>-Lugar de apoio e recomeço.</p>
                        </div>
                </div>

           
            

            </footer>
        </div>
    )
}

export default RodapeHome