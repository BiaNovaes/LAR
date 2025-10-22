import CabecalhoHome from '../Components/CabecalhoHome';
import HomeInicio from '../Components/hero';
import MenuCards from '../Components/MenuCards';
import PerguntasFrequentes from '../Components/perguntasFrequentes';
// import RodapeHome from '../Components/RodapeHome';
import RodapeHome2 from '../Components/RodapeHome2';
import TiposAbusos from '../Components/tiposAbusosHome';


function Home () {

 

    return(
        
        <div>
    <CabecalhoHome/>
    <HomeInicio/>
    <MenuCards/>
    <TiposAbusos/>
    <PerguntasFrequentes/>
    <RodapeHome2/>
      
        </div>
    )
}

export default Home;