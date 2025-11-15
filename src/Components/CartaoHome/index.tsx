import style from './CartaoHome.module.css'
import saudeImg from '../../assets/icons/SaudeImg.png'
import AbusosImg from '../../assets/icons/AbusoImg.png'

import InstituicaoImg from '../../assets/icons/IntituicaoImg.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function InfoSection() {
    return (
        <section className={style.infoSection}>
            <h2>Entendendo mais o que está acontecendo...</h2>

            <p className={style.sub}>
                Explore conteúdos informativos criados com cuidado para apoiar você em diferentes situações.
            </p>

            <div className={style.seta}>↓</div>

            <div className={style.cardsContainer}>

                <Link to="/tipos-de-abuso" className={style.card}>
                    <span className={style.circle}>
                        <img src={saudeImg} alt="Saúde Mental" />
                    </span>
                    <h3>Saúde Mental</h3>
                    <p>
                        Informações sobre ansiedade, depressão, transtornos e como buscar ajuda profissional.
                    </p>
                </Link>

                
                <HashLink to="/TiposAbusos#TiposAbusos" className={style.card}>
                    <span className={style.circle}>
                        <img src={AbusosImg} alt="Tipo Abuso" />
                    </span>
                    <h3>Tipo de Abuso</h3>
                    <p>
                        Entenda os diferentes tipos de abuso e como reconhecer situações de risco.
                    </p>
                </HashLink>

                <Link to="/instituicao" className={style.card}>
                    <span className={style.circle}>
                        <img src={InstituicaoImg} alt="Intituicao" />
                    </span>
                    <h3>Instituições</h3>
                    <p>
                        Contatos úteis, serviços gratuitos e organizações que podem ajudar você.
                    </p>
                </Link>

                <p>*Esse site não se destina para atendimento imediato. Em caso de urgência ligue para 190 ou 188.</p>

            </div>
        </section>
    );
}
