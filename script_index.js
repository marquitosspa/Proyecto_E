// Opcional: Puedes agregar más texto aquí si quieres que aparezca uno después de otro.
const texto = "Hola, Ema.\n¿Cómo estás?\nTal vez te estuviste preguntando el por qué te dejé de escribir de un momento a otro, espero que no hayas estado sobrepensando.\nPido disculpas por eso, pero lo que me dijiste me ha llegado y me he puesto a reflexionar bastante…\nTe explico:";

document.addEventListener('DOMContentLoaded', () => {
    const textoElemento = document.getElementById('texto');
    textoElemento.textContent = '';
    let i = 0;

    function escribirTexto() {
        if (i < texto.length) {
            textoElemento.textContent += texto.charAt(i);
            i++;
            setTimeout(escribirTexto, 50); // Modifica el valor para cambiar la velocidad de escritura
        }
    }

    escribirTexto();
});
