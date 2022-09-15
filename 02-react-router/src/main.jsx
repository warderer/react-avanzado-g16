import React from 'react'
import ReactDOM from 'react-dom/client'
/* Importar BrowserRouter, que dota a mi App de poner manejar rutas
Debe estar en un componente superior, para que este disponible en toda
mi aplicación en
*/
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
