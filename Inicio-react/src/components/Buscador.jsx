import { useState } from "react";

export default function Buscador() {
  const frutas = ["manzana", "pera", "naranja", "banana", "kiwi", "mango"];

  const [busqueda, setBusqueda] = useState("");

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar fruta..."
      />

      {frutasFiltradas.map((fruta) => (
        <p key={fruta}>{fruta}</p>
      ))}
    </div>
  );
}