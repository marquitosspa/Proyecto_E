// JavaScript para la página 2
const textoPagina2 = "Ya sé, sé que solo sé hablar, sé que son solo palabras, sé que, si hablamos de forma de amar, esta es la peor de todas ellas. ¿Palabras? ¿Qué realmente son? ¿Serán solo sonidos que cobran significados en un contexto social y cultural específico? ¿Qué valor pueden estas tener? ¿Qué sentido puede haber en un amor así?";

document.addEventListener('DOMContentLoaded', () => {
    const textoElemento = document.getElementById('texto');
    textoElemento.textContent = '';

    let i = 0;

    function escribirTexto() {
        if (i < textoPagina2.length) {
            textoElemento.textContent += textoPagina2.charAt(i);
            i++;
            setTimeout(escribirTexto, 50); // Modifica el valor para cambiar la velocidad de escritura
        }
    }

    escribirTexto();
});
