let numeroSecreto = Math.floor(Math.random() * 100) + 1;  // Generar número entre 1 y 100
let intentos = 0;

// Función para verificar el número ingresado
function verificarNumero() {
    const entrada = document.getElementById('entrada').value;
    const mensaje = document.getElementById('mensaje');
    const intentosDiv = document.getElementById('intentos');
    intentos++;

    if (entrada == numeroSecreto) {
        mensaje.textContent = `¡Felicidades! Has adivinado el número en ${intentos} intentos.`;
        mensaje.style.color = 'green';
        intentosDiv.textContent = `Número de intentos: ${intentos}`;
    } else if (entrada < numeroSecreto) {
        mensaje.textContent = 'El número es mayor. Intenta nuevamente.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'El número es menor. Intenta nuevamente.';
        mensaje.style.color = 'red';
    }
    intentosDiv.textContent = `Número de intentos: ${intentos}`;
}
