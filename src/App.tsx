import { Route, Routes } from "react-router-dom";
import Sos from "./Pages/Sos.tsx";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home.tsx";
import EsqueciSenha from "./Pages/EsqueciSenha.tsx/index.tsx";
import ResetarSenha from "./Pages/ResetarSenha/index.tsx";
import FormAjuda from "./Pages/FormAjuda.tsx";
import FormQueroAjuda from "./Pages/FormQueroAjuda.tsx";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/sos" element={<Sos />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
      <Route path="/resetar-senha" element={<ResetarSenha />} />
      <Route path="/preciso-ajuda" element={<FormAjuda />} />
      <Route path="/formqueroajuda" element={<FormQueroAjuda />} />
    </Routes>
  );
}

export default App;
