// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musicaFondo');
    const boton = document.getElementById('btnReproducir');

    // Función para manejar el clic en el botón
    boton.addEventListener('click', () => {
        if (musica.paused) {
            musica.play();
            boton.textContent = "Pausar ⏸";
        } else {
            musica.pause();
            boton.textContent = "Reproducir 🔊";
        }
    });

    // Intento de reproducción automática (la mayoría de navegadores lo bloqueará al inicio)
    // Pero si el usuario ya ha interactuado antes, funcionará.
    const promesaPlay = musica.play();

    if (promesaPlay !== undefined) {
        promesaPlay.then(() => {
            // Si funciona solo, actualizamos el botón
            boton.textContent = "Pausar ⏸";
        }).catch(error => {
            // El navegador bloqueó el autoplay (esperado)
            console.log("Autoplay bloqueado por el navegador. Se requiere acción del usuario.");
        });
    }
});