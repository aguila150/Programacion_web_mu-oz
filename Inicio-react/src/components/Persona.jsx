//Ejercicio 1 y 2 clase 10
export default function Persona(props){
    const {nombre, apellido} = props 
    return(
        
        <div>
            
            <h1>Hola {nombre} {apellido}</h1>
            <p>Programador</p>
            <ul>Python</ul>
            <ul>C++</ul>
            <ul>HTML</ul>
        </div>
    )

}