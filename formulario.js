document.getElementById('contactForm').addEventListener('input', function() {
    document.getElementById('nombreResult').textContent = document.getElementById('nombre').value;
    document.getElementById('apellidoResult').textContent = document.getElementById('apellido').value;
    document.getElementById('emailResult').textContent = document.getElementById('email').value;
    document.getElementById('telefonoResult').textContent = document.getElementById('telefono').value;
    document.getElementById('edadResult').textContent = document.getElementById('edad').value;
    document.getElementById('direccionResult').textContent = document.getElementById('direccion').value;
    document.getElementById('provinciaResult').textContent = document.getElementById('provincia').value;
    document.getElementById('codigoPostalResult').textContent = document.getElementById('codigoPostal').value;

    const metodoContacto = document.querySelector('input[name="metodoContacto"]:checked');
    document.getElementById('metodoContactoResult').textContent = metodoContacto ? metodoContacto.value : '';

    const suscripciones = Array.from(document.querySelectorAll('input[name="suscripcion"]:checked'))
        .map(checkbox => checkbox.value)
        .join(', ');
    document.getElementById('suscripcionResult').textContent = suscripciones;
});