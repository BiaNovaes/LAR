
import style from './styles.module.css'
import {HashLink} from 'react-router-hash-link'


function TiposAbusos(){

   return (
        <div className={style.tiposAbusos}>
            <div className={style.containerAbs}>
              
               <span>Tipo de Abuso</span>
               <br />
               <p>
                  Aqui listaremos algumas diferentes tipos de abuso <br />
                  para ajudar na identificação dos sinais e na conscientização sobre suas consequências. <br />
                  Entender o que é abuso é um passo essencial para quebrar o silêncio, <br />
                  buscar ajuda e fortalecer a proteção e o respeito em todas as relações  <br />
               </p>
               <div className={style.containerBtoAbs}>
                     <HashLink to='/TiposAbusos#TiposAbusos' className={style.btoSaibaMaisAbs} >Saiba Mais</HashLink>
               </div>
            
            </div>

            <div className={style.containerTopicosAbs}>
                
                    
                       
                        <HashLink smooth to='/TiposAbusos#VFisica' className={style.topicoBto}>Violência Física </HashLink>
                       <HashLink smooth to='/TiposAbusos#VPsicologica' className={style.topicoBto}>Violência Psicológica </HashLink>
                        <HashLink smooth to='/TiposAbusos#VSexual' className={style.topicoBto}>Violência Sexual </HashLink>
                        <HashLink smooth to='/TiposAbusos#VPatrimonial' className={style.topicoBto}>Violência Patrimonial </HashLink>
                        <HashLink smooth to='/TiposAbusos#VMoral' className={style.topicoBto}>Violência Moral </HashLink>
                        <HashLink smooth to='/TiposAbusos#VDomestica' className={style.topicoBto}>Violência Doméstica </HashLink>
               
                
            </div>
               
         </div>
    )
}

export default  TiposAbusos;