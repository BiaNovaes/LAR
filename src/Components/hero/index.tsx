import { useNavigate } from 'react-router-dom';
import style from './styles.module.css'


function HomeInicio(){

    const navigate = useNavigate();

    function handleNavegarPrecisoAjuda(){
    navigate('/instituicao-ajuda') }

    return (
        <div className={style.homeInicio}>
            <div className={style.textoHome}>
                <h1>
                    Seja bem vindo(a). <br />
                    Aqui é um espaço seguro.
                </h1>
                <span>Estamos aqui para te apoiar.</span>

            <button onClick={handleNavegarPrecisoAjuda} className={style.btoAjuda}>Preciso de Ajuda</button>
            </div>
        </div>
    )
}

export default HomeInicio;