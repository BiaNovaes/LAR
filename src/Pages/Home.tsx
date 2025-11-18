import BotaoSOS from '../Components/Botao/botao';
import CabecalhoHome from '../Components/CabecalhoHome';
import CartaoHome from '../Components/CartaoHome';
import HomeInicio from '../Components/hero';
import MenuCards from '../Components/MenuCards';
import PerguntasFrequentes from '../Components/perguntasFrequentes';
import RodapeHome from '../Components/RodapeHome';
import TiposAbusos from '../Components/tiposAbusosHome';


function Home() {



    return (

        <div>
            <CabecalhoHome />
            <HomeInicio />
            <BotaoSOS />
            <CartaoHome />
            {/* <MenuCards/>
    <TiposAbusos/> */}
            <PerguntasFrequentes />
            <RodapeHome />

        </div>
    )
}

export default Home;