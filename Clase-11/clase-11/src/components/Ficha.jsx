import { useEffect, useState } from "react"

export default function Ficha({nombre,rol}){

    const [favorito, setFavorito] = useState(false)

    useEffect(()=>{
        localStorage.setItem("clave", String(favorito));
    },[favorito])

    return(
        <div>
            <h3>{nombre}</h3>
            <p>{rol}</p>
            <button onClick={()=> setFavorito(!favorito)}> Marcar favorito </button>
            {favorito ? "⭐" : "❌"}

            
        </div>
    )
}