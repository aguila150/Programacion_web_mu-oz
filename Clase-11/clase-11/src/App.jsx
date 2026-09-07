import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Reloj from './components/Reloj'
import Ficha from './components/Ficha'

function App() {
  const [visible, setVisible] = useState(true)

  return (
    <>
    <button onClick={() => setVisible(!visible)}>
     {visible ? "Ocultar Hora" : "Mostrar hora"}
    </button>
    {visible ? <Reloj/> : ""}
    <Ficha nombre={"Salame"} rol={"Admin"}/>
    
    </>
  )
}

export default App
