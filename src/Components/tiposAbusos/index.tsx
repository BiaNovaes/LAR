import { useNavigate } from 'react-router-dom';
import style from './styles.module.css'


function TiposAbusos(){

   return (
        <div className={style.tiposAbusos}>
            <div className={style.containerAbs}>
              
               <span>Tipo de Abuso</span>
               <br />
               <p>
                    We provide to you the best choiches for you. Adjust it to your health <br />
                    needs and make sure your undergo treatment with our highly <br />
                    qualified doctors you can consult with us which type of service is <br />
                    suitable for your health.
               </p>
               <div className={style.containerBtoAbs}>
                     <button className={style.btoSaibaMaisAbs}>Saiba Mais</button>
               </div>
            
            </div>

            <div className={style.containerTopicosAbs}>
                
                    
                        <button className={style.topicoBto}>Violência Domestica</button>
                        <button className={style.topicoBto}>Violência Física </button>
                        <button className={style.topicoBto}>Violência Psicológica</button>
                        <button className={style.topicoBto}>Violência Sexual</button>
                        <button className={style.topicoBto}>Violência Patrimonial</button>
                        <button className={style.topicoBto}>Violência Moral</button>
               
                
            </div>
               
         </div>
    )
}

export default  TiposAbusos;