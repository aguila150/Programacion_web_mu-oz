import { useState } from "react";

export default function Contador() {
  const [conteo, setConteo] = useState(0);

  return (
    <div>
      <p>Conteo actual: {conteo}</p>

      <button onClick={() => setConteo(conteo + 1)}>Sumar</button>
      <button onClick={() => setConteo(conteo > 0 ? conteo - 1 : 0)}>Restar</button>
      <button onClick={() => setConteo(0)}>Reiniciar</button>
    </div>
  );
}