// ===============================
// JUEGOS EDUCATIVOS - FUNCIONALES
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    /* =====================
    JUEGO 1: VERDADERO O FALSO
    ===================== */

    document.querySelectorAll(".vf-list li").forEach(item => {

    const correcta = item.dataset.respuesta === "true";

    // 🔴 Desactiva clic en el <li>
    item.style.pointerEvents = "none";
    item.style.cursor = "default";

    const opciones = document.createElement("div");
    opciones.className = "vf-opciones";
    opciones.style.marginTop = "12px";
    opciones.style.display = "flex";
    opciones.style.gap = "10px";

    const btnV = document.createElement("button");
    btnV.textContent = "✔ Verdadero";
    btnV.type = "button";
    btnV.style.pointerEvents = "auto";

    const btnF = document.createElement("button");
    btnF.textContent = "✖ Falso";
    btnF.type = "button";
    btnF.style.pointerEvents = "auto";

    opciones.appendChild(btnV);
    opciones.appendChild(btnF);
    item.appendChild(opciones);

    const marcarBoton = (boton, correcto) => {
        boton.style.background = correcto ? "#22c55e" : "#ef4444";
        boton.style.color = "#ffffff";
        boton.style.borderColor = boton.style.background;
    };

    const desactivarBoton = (boton) => {
        boton.disabled = true;
        boton.style.opacity = "0.7";
        boton.style.cursor = "not-allowed";
    };

    const responder = (eleccion, botonPresionado, botonOpuesto, event) => {
        event.stopPropagation();

        if (item.classList.contains("respondido")) return;
        item.classList.add("respondido");

        const acierto = eleccion === correcta;

        marcarBoton(botonPresionado, acierto);
        marcarBoton(botonOpuesto, !acierto);

        desactivarBoton(btnV);
        desactivarBoton(btnF);

        item.style.background = acierto ? "#d1fae5" : "#fee2e2";
        item.style.color = acierto ? "#065f46" : "#7f1d1d";
    };

    btnV.addEventListener("click", (e) =>
        responder(true, btnV, btnF, e)
    );

    btnF.addEventListener("click", (e) =>
        responder(false, btnF, btnV, e)
    );
    });

  /* =====================
     JUEGO 2: ORGANIZA TU TIEMPO
  ===================== */

  const tiempoUso = {
    "Uso académico": "✔ Buen uso de la tecnología.",
    "Uso recreativo": "⚠ Úsalo con moderación.",
    "Tiempo innecesario frente a pantallas": "✖ Reduce este hábito."
  };

  document.querySelectorAll(".card:nth-of-type(2) ul li").forEach(li => {
    li.style.cursor = "pointer";

    li.addEventListener("click", () => {
      if (li.classList.contains("respondido")) return;
      li.classList.add("respondido");

      alert(tiempoUso[li.textContent]);

      li.style.background = "#e0e7ff";
      li.style.color = "#1e3a8a";
    });
  });

  /* =====================
     JUEGO 3: DETECTA EL MAL HÁBITO
  ===================== */

  const malosHabitos = {
    "Usar el celular durante clases": true,
    "Hacer pausas visuales": false,
    "Dormir con el teléfono encendido": true
  };

  document.querySelectorAll(".card:nth-of-type(3) ul li").forEach(li => {
    li.style.cursor = "pointer";

    li.addEventListener("click", () => {
      if (li.classList.contains("respondido")) return;
      li.classList.add("respondido");

      const texto = li.textContent.trim();
      const esMalo = malosHabitos[texto];

      li.style.background = esMalo ? "#fee2e2" : "#d1fae5";
      li.style.color = esMalo ? "#7f1d1d" : "#065f46";

      li.textContent += esMalo
        ? " ❌ Mal hábito"
        : " ✅ Buen hábito";
    });
  });

});
