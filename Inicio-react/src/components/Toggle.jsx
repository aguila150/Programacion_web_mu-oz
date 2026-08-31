import { useState } from "react";

export default function Acordeon({ titulo, contenido }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div>
      <button onClick={() => setAbierto(!abierto)}>
        {abierto ? "Cerrar" : "Abrir"}
      </button>

      {abierto && (
        <div>
          <p>¿Qué es la VRAM? {contenido}</p>
        </div>
      )}
    </div>
  );
}
