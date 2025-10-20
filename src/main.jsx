import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesApp from './Routes/RoutesApp'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RoutesApp/>
    
  </StrictMode>
)
