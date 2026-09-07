import { useEffect, useState } from "react"

export default function Reloj(){

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        const id = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            console.log("Tic")
        }, 1000);
        return () => clearInterval(id)
    },[])
   
    
    return(
        <div>
            
       {time}
        </div>


    )

}