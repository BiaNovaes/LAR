import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)



// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );