// JavaScript para la página 4
const textoPagina4 = "Pido disculpas por no ser verdaderamente lo que esperabas, pero bueno… mientras no pueda hacer más y me lo permitas, seguiré demostrando mi amor de esta forma tan mediocre…\nSOLO CON PALABRAS…";

document.addEventListener('DOMContentLoaded', () => {
    const textoElemento = document.getElementById('texto');
    textoElemento.textContent = '';

    let i = 0;

    function escribirTexto() {
        if (i < textoPagina4.length) {
            textoElemento.textContent += textoPagina4.charAt(i);
            i++;
            setTimeout(escribirTexto, 50); // Modifica el valor para cambiar la velocidad de escritura
        }
    }

    escribirTexto();
});
