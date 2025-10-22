import {  useNavigate} from 'react-router-dom';
import logo from '../../assets/imagens/image1.png'
import style from './styles.module.css'


function Cabecalho () {

const navigate = useNavigate();
    

function handleNavegarHome(){
        navigate('/')
    }
function handleNavegarInstituicao(){
    navigate('/instituicao')
}
function handleNavegarInstituicaoAjuda(){
    navigate('/queroajudar')
}
function handleNavegarPrecisoAjuda(){
    navigate('/precisodeajuda')
}
function handleNavegarSos(){
    navigate('/Sos')
}
    return (
        <div>
         <div className={style.cabecalho}>
            <a href='/' className={style.Logo}>
                <img src={logo} alt="Logo" />
            </a>
            
           <div>
                <button className={style.bto} onClick={handleNavegarHome}>Home</button>
                <button className={style.bto} onClick={handleNavegarInstituicao}>Instituições</button>
                <button className={style.bto} onClick={handleNavegarInstituicaoAjuda}>Quero Ajudar</button>
                <button className={style.bto} onClick={handleNavegarPrecisoAjuda}>Preciso de Ajuda</button>
                
           </div>

                 <button className={style.btoSOS}  onClick={handleNavegarSos}>SOS</button>
                
            </div>
        </div>
    )
}

export default Cabecalho
