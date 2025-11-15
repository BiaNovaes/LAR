import { useNavigate } from 'react-router-dom';
import style from './styles.module.css'
import ImagemHome from '../../assets/imagens/HomeTeste.png'


function HomeInicio(){

    const navigate = useNavigate();

    function handleNavegarPrecisoAjuda(){
    navigate('/instituicao-ajuda') }

    return (
        <div className={style.homeInicio}>
            <div className={style.textoHome}>
                <h1>
                    Você não está sozinho(a)
                </h1>
                <span>O LAR é um espaço seguro e acolhedor com informações sobre saúde mental, tipos de abuso e recursos de apoio. Aqui você encontra orientação e caminhos para recomeçar.</span>

            <button onClick={handleNavegarPrecisoAjuda} className={style.btoAjuda}>Preciso de Ajuda</button>
            </div>

            <img src={ImagemHome} className={style.Imagem} alt="Imagem Home" />
        </div>
    )
}

export default HomeInicio;