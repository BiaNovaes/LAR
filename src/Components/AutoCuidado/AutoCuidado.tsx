import Saude from '../../assets/icons/meditar.png'
import Sono from '../../assets/icons/sono.png'
import Exercicio from '../../assets/icons/exercicioFisico.png'
import style from './styles.module.css'

function AutoCuidado() {
    return (
        <div>

            <h1 className={style.titulo}>Praticas de AutoCuidado</h1>
            <p className={style.sub}>A saúde mental é tão importante quanto a saúde física. Problemas de saúde mental são comuns e tratáveis. Buscar ajuda profissional é fundamental para o diagnóstico correto e tratamento adequado. Não tenha vergonha ou medo de procurar um psicólogo ou psiquiatra.</p>
            <div className={style.cardsContainer}>

                <div className={style.card}>
                    <span className={style.circle}>
                        <img src={Exercicio} />
                    </span>
                    <h3>Atividade Física</h3>
                    <p>
                        Exercícios regulares melhoram o humor e reduzem ansiedade e estresse.
                    </p>
                </div>


                <div className={style.card}>
                    <span className={style.circle}>
                        <img src={Sono} />
                    </span>
                    <h3>Sono Adequado</h3>
                    <p>
                        7-9 horas de sono por noite são essenciais para saúde mental.
                    </p>
                </div>

                <div className={style.card}>
                    <span className={style.circle}>
                        <img src={Saude} />
                    </span>
                    <h3>Mindfulness</h3>
                    <p>
                        Práticas de atenção plena ajudam a reduzir preocupações e estresse
                    </p>
                </div>


            </div>

        </div>
    );
}

export default AutoCuidado;