import { Route, Routes } from "react-router-dom";
import Sos from "./Pages/Sos.tsx";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home.tsx";
import EsqueciSenha from "./Pages/EsqueciSenha.tsx/index.tsx";
import ResetarSenha from "./Pages/ResetarSenha/index.tsx";
import FormAjuda from "./Pages/FormAjuda.tsx";
import Login from "./Pages/Login/Login.tsx";
import FormQueroAjuda from "./Pages/FormQueroAjuda.tsx";
import TiposDeAbuso from "./Pages/TiposAbusos/TiposAbusos.tsx";
import "./App.css";
import Instituicao from "./Pages/Instituicao.tsx";
import InstituicaoAjuda from "./Pages/InstituicaoPrecisoDeAjuda.tsx";
import FaleConosco from "./Pages/FaleConosco.tsx";
import BotaoSOS from "./Components/Botao/botao.tsx";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/sos" element={<Sos />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
      <Route path="/resetar-senha" element={<ResetarSenha />} />
      <Route path="/queroajudar" element={<FormAjuda />} />
      <Route path="/precisodeajuda" element={<FormQueroAjuda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/TiposAbusos" element={<TiposDeAbuso />} />
      <Route path="/instituicao" element={<Instituicao />} />
      <Route path="/instituicao-ajuda" element={<InstituicaoAjuda />} />
      <Route path="/faleConosco" element={<FaleConosco/>}/>
      <Route path="/BotaoSOS" element={<BotaoSOS/>}/>
    </Routes>
  );
}

export default App;
