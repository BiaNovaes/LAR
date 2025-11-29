import AutoCuidado from "../Components/AutoCuidado/AutoCuidado";
import BotaoSOS from "../Components/Botao/botao";
import CabecalhoHome from "../Components/CabecalhoHome";
import MenuCards from "../Components/MenuCards";
import RodapeHome from "../Components/RodapeHome";


function SaudeMental() {
    return (
        <div>
            <CabecalhoHome />
            <MenuCards />
            <AutoCuidado />
            <BotaoSOS />
            <RodapeHome />

        </div>
    );
}
export default SaudeMental;