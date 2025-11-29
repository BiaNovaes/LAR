import style from '../../Style/abusos.module.css';
import imagem from '../../assets/imagens/Abusos/tiposAbusos.jpg';
import ImgViolenciaFisica from '../../assets/imagens/Abusos/violenciaFisica.jpg'
import ImgViolenciaPsicologica from '../../assets/imagens/Abusos/violenciaPsicologica.jpg'
import ImgViolenciaSexual from '../../assets/imagens/Abusos/violenciaSexual.jpg'
import ImgViolenciaPatrimonial from '../../assets/imagens/Abusos/violenciaPatrimonial.jpg'
import ImgViolenciaMoral from '../../assets/imagens/Abusos/violenciaMoral.jpg'
import ImgViolenciaDomestica from '../../assets/imagens/Abusos/violenciaDomestica.jpg'
import AcordeaoAbusos from '../../Components/Acordeao/acordeaoViolenciaFisica';
import AcordeaoAbusos2 from '../../Components/Acordeao/acordeaoViolenciaPsicologica';
import AcordeaoAbusos3 from '../../Components/Acordeao/acordeaoViolenciaSexual';
import AcordeaoAbusos4 from '../../Components/Acordeao/acordeaoViolenciaPatrimonial';
import AcordeaoAbusos5 from '../../Components/Acordeao/acordeaoViolenciaMoral';
import { Link } from 'react-router-dom';
import RodapeHome from '../../Components/RodapeHome';
import BotaoVoltar from './BotaoVoltar/BotaoVoltar';
<<<<<<< HEAD
import CabecalhoHome from '../../Components/CabecalhoHome';
=======
import BotaoSOS from '../../Components/Botao/botao';
import { HashLink } from 'react-router-hash-link';
>>>>>>> 25d3b404ad69bd18ec895f0a7168109e29760400





function TiposDeAbuso() {


  return (
    <>
      <CabecalhoHome />
      <div className={style.TiposDeAbusoContainer} id='TiposAbusos'>

        <header className={style.hero}>


          <img src={imagem} className={style.imagem} />
          <h1 className={style.titulo}>Tipos de Abuso</h1>
          <br />
          <p className={style.introdução}>Essas formas de agressão são complexas, perversas, não ocorrem isoladas umas das outras
            e têm graves consequências para a mulher. <br />
            Qualquer uma delas constitui ato de violação dos direitos humanos e deve ser denunciada.<br />
            <br />
            <br />
            Abaixo você terá informações de cada tipo de abuso.
            <br />
            <br />
            Não se cale, denuncie.
          </p>

          {/* <div className={style.arrowdown}></div> */}

<<<<<<< HEAD
          <div className={style.flecha}>&#8744;</div>
=======

        <HashLink smooth to='/TiposAbusos#VFisica' className={style.flecha}>&#8744; </HashLink>

  
>>>>>>> 25d3b404ad69bd18ec895f0a7168109e29760400

        </header>


        <div className={style.conteudo1} id='VFisica'>

          <img src={ImgViolenciaFisica} className={style.ImgViolenciaFisica} />


          <div className={style.secaoAbusos1}>

            <h1>Violência Física</h1>


            <p>Abaixo você terá informações sobre este tipo de abuso. <br />

              Não se cale, <b>denuncie</b>.</p>

          </div>

          <div className={style.meuacordeao}><AcordeaoAbusos /></div>

          <div className={style.RodapeAcordeao}>A intenção de agredir é suficiente: Não é necessário que a agressão deixe uma marca visível para ser considerada agressão física; a simples <br /> intenção de prejudicar a saúde ou a integridade corporal basta, <b>denuncie</b>.</div>


        </div>

        <div className={style.conteudo2} id='VPsicologica'>

          <img src={ImgViolenciaPsicologica} className={style.ImgViolenciaPsicologica} />

          <div className={style.secaoAbusos2}>

            <h1>Violência Psicologica</h1>

            <p>Abaixo você terá informações sobre este tipo de abuso. <br />
              Não se cale, <b>denuncie</b>.</p>

            <div className={style.meuacordeao2}><AcordeaoAbusos2 /></div>

            <div className={style.RodapeAcordeao2}> A violência psicológica é uma forma de agressão que não deixa marcas visíveis no corpo, mas causa danos profundos à saúde mental e emocional da vítima. Ela é a base para outras formas de violência, <b>denuncie</b>.</div>



          </div>

        </div>


        <div className={style.conteudo3} id='VSexual'>

          <img src={ImgViolenciaSexual} className={style.ImgViolenciaSexual} />


          <div className={style.secaoAbusos3}>

            <h1>Violência Sexual</h1>


            <p>Abaixo você terá informações sobre este tipo de abuso. <br />

              Não se cale, <b>denuncie</b>.</p>

          </div>

          <div className={style.meuacordeao3}><AcordeaoAbusos3 /></div>

          <div className={style.RodapeAcordeao3}> Consentimento é a chave: Qualquer ato sexual sem o consentimento livre e explícito da outra pessoa é considerado violência sexual. <br /> O silêncio ou a ausência de um "não" não significam "sim", <b>denuncie</b>.</div>



        </div>

        <div className={style.conteudo4} id='VPatrimonial'>

          <img src={ImgViolenciaPatrimonial} className={style.ImgViolenciaPatrimonial} />


          <div className={style.secaoAbusos4}>

            <h1>Violência Patrimonial</h1>

            <p>Abaixo você terá informações sobre este tipo de abuso. <br />
              Não se cale, <b>denuncie</b>.</p>

            <div className={style.meuacordeao4}><AcordeaoAbusos4 /></div>

            <div className={style.RodapeAcordeao4}> É uma forma de controle: A violência patrimonial visa controlar a vida da vítima, limitando sua autonomia e criando uma relação de dependência e aprisionamento, <b>denuncie</b>.</div>



          </div>

        </div>


        <div className={style.conteudo5} id='VMoral'>

          <img src={ImgViolenciaMoral} className={style.ImgViolenciaMoral} />

          <div className={style.secaoAbusos5}>

            <h1>Violência Moral</h1>


            <p>Abaixo você terá informações sobre este tipo de abuso. <br />

              Não se cale, <b>denuncie</b>.</p>

          </div>

          <div className={style.meuacordeao5}><AcordeaoAbusos5 /></div>

          <div className={style.RodapeAcordeao5}> <br /> O objetivo é ferir a honra: A violência moral ataca a imagem e a reputação da vítima, buscando isolá-la e destruir sua autoestima perante si mesma e a sociedade, <b>denuncie</b>.</div>


        </div>


        <div className={style.conteudo6} id='VDomestica'>



          <div className={style.secaoAbusos6}>

            <h1>Violência Domestica </h1>


            <p>De acordo com o art. 5º da Lei Maria da Penha, violência doméstica e familiar contra a mulher é “qualquer ação <br /> ou omissão baseada no gênero que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral <br /> ou patrimonial”. <br />
              Quando a vítima silencia diante da violência, o agressor não se sente responsabilizado pelos seus atos - isso sem <br /> contar o fato de que a sociedade, em suas diversas práticas, reforça a cultura patriarcal e machista, o que <br /> dificulta a percepção da mulher de que está vivenciando o ciclo da violência. <br />
              Com o tempo, os intervalos entre uma fase e outra ficam menores, e as agressões passam a acontecer sem <br /> obedecer à ordem das fases. Em alguns casos, o ciclo da violência termina com o feminicídio, que é o assassinato <br /> da vítima.<br /><br />

              Não se cale, <b>denuncie</b>.</p>

            <Link to={'/sos'} className={style.btoSOS}>S.O.S</Link>
          </div>

          <img src={ImgViolenciaDomestica} className={style.ImgViolenciaDomestica} />


        </div>

        <BotaoVoltar />
        <RodapeHome />

      </div>
<<<<<<< HEAD
    </>
=======


      <div className={style.conteudo6} id='VDomestica'>



        <div className={style.secaoAbusos6}>

          <h1>Violência Domestica </h1>


          <p>De acordo com o art. 5º da Lei Maria da Penha, violência doméstica e familiar contra a mulher é “qualquer ação <br /> ou omissão baseada no gênero que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral <br /> ou patrimonial”. <br />
            Quando a vítima silencia diante da violência, o agressor não se sente responsabilizado pelos seus atos - isso sem <br /> contar o fato de que a sociedade, em suas diversas práticas, reforça a cultura patriarcal e machista, o que <br /> dificulta a percepção da mulher de que está vivenciando o ciclo da violência. <br />
            Com o tempo, os intervalos entre uma fase e outra ficam menores, e as agressões passam a acontecer sem <br /> obedecer à ordem das fases. Em alguns casos, o ciclo da violência termina com o feminicídio, que é o assassinato <br /> da vítima.<br /><br />

            Não se cale, <b>denuncie</b>.</p>

          <Link to={'/sos'} className={style.btoSOS}>S.O.S</Link>
        </div>

        <img src={ImgViolenciaDomestica} className={style.ImgViolenciaDomestica} />


      </div>

      <BotaoVoltar/>
      <BotaoSOS />
      <RodapeHome />

    </div>
</>
>>>>>>> 25d3b404ad69bd18ec895f0a7168109e29760400
  );
}

export default TiposDeAbuso