import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Sos from './Pages/Sos.tsx';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home.tsx';


function App() {
 
  return (
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/sos' element={<Sos/>}/>
      </Routes>

  );
}

export default App;
