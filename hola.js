window.onload = function () {
    const saludoEl = document.getElementById("saludo");
    const box = document.querySelector(".bienvenida-box");

    if (!saludoEl || !box) return; // evita errores en otras páginas

    let nombre = prompt("¡Hola! 😊\nPor favor, ayúdanos con tu nombre:");

    if (!nombre || nombre.trim() === "") {
        nombre = "Estudiante";
    }

    const safeName = nombre.trim().slice(0, 40);

    saludoEl.innerHTML =
        "<h1>¡Bienvenido/a, " + safeName + "! 💻</h1>" +
        "<p>Estás a punto de aprender sobre el uso excesivo de la tecnología en estudiantes.</p>";

    box.classList.add("mostrar");
};
