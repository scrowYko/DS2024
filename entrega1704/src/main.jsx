import React from 'react'
import ReactDOM from 'react-dom/client'
import Flexbox from './flexbox'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( //renderiza o root
  <React.StrictMode>
    <Flexbox /> {/* Chamando função que retorna a flexbox */}
  </React.StrictMode>,
)
