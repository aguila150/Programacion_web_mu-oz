import { useState } from "react";

function Item({ texto, comprado, onToggle, onEliminar }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={comprado}
        onChange={onToggle}
      />

      <span
        style={{
          textDecoration: comprado ? "line-through" : "none"
        }}
      >
        {texto}
      </span>

      <button onClick={onEliminar}>✕</button>
    </li>
  );
}

export default function ListaCompras() {
  const [items, setItems] = useState([]);
  const [nuevoItem, setNuevoItem] = useState("");

  function agregarItem() {
    if (!nuevoItem.trim()) return;

    setItems([
      ...items,
      {
        id: Date.now(),
        texto: nuevoItem,
        comprado: false
      }
    ]);

    setNuevoItem("");
  }

  function toggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, comprado: !item.comprado }
          : item
      )
    );
  }

  function eliminarItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const faltanComprar = items.filter(
    (item) => !item.comprado
  ).length;

  return (
    <div>
      <h1>Lista de compras</h1>

      <input
        value={nuevoItem}
        onChange={(e) => setNuevoItem(e.target.value)}
        placeholder="Agregar producto..."
      />

      <button onClick={agregarItem}>
        Agregar
      </button>

      <p>Faltan comprar: {faltanComprar}</p>

      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            texto={item.texto}
            comprado={item.comprado}
            onToggle={() => toggleItem(item.id)}
            onEliminar={() => eliminarItem(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}