import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Persona from "./components/Persona";
import TarjetaPelicula from "./components/TarjetaPelicula";
import Contador from "./components/Contador";
import Acordeon from "./components/Toggle";
import Buscador from "./components/Buscador";
import ListaCompras from "./components/Integrador";

const peliculas = [
  { id: 1, titulo: "Interstellar", año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight", año: 2008, vista: true },
  { id: 3, titulo: "Inception", año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer", año: 2023, vista: true },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {peliculas.map((pelicula) => (
        <TarjetaPelicula
          key={pelicula.id}
          titulo={pelicula.titulo}
          año={pelicula.año}
          vista={pelicula.vista}
        />
      ))}
      <Persona nombre="Sebastián" apellido="Muñoz" />
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div>
        <Contador />
      </div>
      <div>
        <Acordeon
          titulo="¿Qué es la VRAM? "
          contenido="La VRAM es la memoria dedicada de una tarjeta gráfica. Se utiliza para almacenar texturas, modelos, buffers y otros datos que la GPU necesita durante los juegos y aplicaciones gráficas."
        />
      </div>

      <div>
        <Buscador />
      </div>
      <div>
        <ListaCompras />
      </div>
    </>
  );
}

export default App;
