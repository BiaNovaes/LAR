import AcordeaoPerguntasFrequentes from '../Acordeao/acordeaoPerguntasFrequentes';
import style from './styles.module.css'


function PerguntasFrequentes(){
      return <div className={style.perguntasFrequentes}>

            <h1 className={style.PFrequentes}>PERGUNTAS FREQUENTES</h1>

            <div className={style.acordeaoPerguntas}><AcordeaoPerguntasFrequentes/></div>

            </div>
}

export default PerguntasFrequentes;