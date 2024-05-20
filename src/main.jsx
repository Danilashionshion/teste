import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Title from './components/titulo.jsx'
import Checkbox from './components/checkbox.jsx'
import ItemLsita from './components/itemLista.jsx'
import Lista from './components/lista.jsx'
import './App.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Lista/>

  </React.StrictMode>,
)
