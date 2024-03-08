// JavaScript para la página 3
const textoPagina3 = "Si, entiendo tu frustración... En un mundo donde mil palabras vuelan por segundo ¿Qué valor tendrá una más o una menos? Pero ¿Qué puedo hacer? Si de mi dependiera te pasaría abrazando 24/7 (aunque no te guste jajaja) Pero es que no soy el caballero de las 1001 hazañas… Pido perdón por eso…";

document.addEventListener('DOMContentLoaded', () => {
    const textoElemento = document.getElementById('texto');
    textoElemento.textContent = '';

    let i = 0;

    function escribirTexto() {
        if (i < textoPagina3.length) {
            textoElemento.textContent += textoPagina3.charAt(i);
            i++;
            setTimeout(escribirTexto, 50); // Modifica el valor para cambiar la velocidad de escritura
        }
    }

    escribirTexto();
});
