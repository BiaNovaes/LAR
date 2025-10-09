import CabecalhoHome from '../Components/CabecalhoHome';
import HomeInicio from '../Components/hero';
import MenuCards from '../Components/MenuCards';
import PerguntasFrequentes from '../Components/perguntasFrequentes';
import RodapeHome from '../Components/RodapeHome';
import TiposAbusos from '../Components/tiposAbusos';


function Home () {

 

    return(
        
        <div>
    <CabecalhoHome/>
    <HomeInicio/>
    <MenuCards/>
    <TiposAbusos/>
    <PerguntasFrequentes/>
    <RodapeHome/>
      
        </div>
    )
}

export default Home;