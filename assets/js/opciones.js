// Obtener todos los botones dentro del formulario por su etiqueta 'button'
const buttons = document.querySelectorAll('.opciones-form button');

// Iterar sobre cada botón para agregar un event listener a cada uno
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Obtener el tipo del botón clickeado
        const buttonType = this.getAttribute('type');

        // Realizar acciones basadas en el tipo de botón
        if (buttonType === 'cargaContenido') {
            alert("Ya están cargados los contenidos");
        } else if (buttonType === 'rubricaEstudiante') {
            alert("Sitio en construcción");
        }

        // Evitar el comportamiento predeterminado del botón (enviar formulario)
        event.preventDefault();
    });
});
