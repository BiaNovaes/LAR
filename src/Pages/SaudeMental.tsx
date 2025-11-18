import AutoCuidado from "../Components/AutoCuidado/AutoCuidado";
import BotaoSOS from "../Components/Botao/botao";
import Cabecalho from "../Components/Cabecalho";
import MenuCards from "../Components/MenuCards";
import RodapeHome from "../Components/RodapeHome";


function SaudeMental() {
    return (
        <div>
            <Cabecalho />
            <MenuCards />
            <AutoCuidado />
            <BotaoSOS />
            <RodapeHome />

        </div>
    );
}
export default SaudeMental;