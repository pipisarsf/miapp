document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    //lista de usuarios
    const users = [
        { usuario: "MarcelaSarsfield", contraseña: "12345678" },
        { usuario: "JuanPerez", contraseña: "87654321" }
    ];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se envíe el formulario automáticamente

        // Captura los valores del usuario y la contraseña del formulario
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;

        // Verifica si el usuario y la contraseña coinciden con los precargados
        const user = users.find(u => u.usuario === usuario && u.contraseña === contraseña);

        if (user) {
            // Redirige al usuario a la página de "Rubricas"
            window.location.href = "opciones.html";
        } else {
            alert("Usuario o contraseña incorrectos. Intente nuevamente");
            // Borra los valores de los campos de entrada
            document.getElementById('usuario').value = "";
            document.getElementById('contraseña').value = "";
        }
    });
});
