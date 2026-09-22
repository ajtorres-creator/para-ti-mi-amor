const boton = document.getElementById("btnSorpresa");

const carta = document.getElementById("carta");

const sorpresas = document.querySelectorAll(".sorpresa");


boton.addEventListener("click", function () {

    // Mostramos la carta, fotos y mensaje final
    sorpresas.forEach(function (seccion) {
        seccion.classList.add("mostrar");
    });


    // Creamos flores
    for (let i = 0; i < 30; i++) {

        setTimeout(function () {
            crearFlor();
        }, i * 100);

    }


    // Esperamos un poquito y bajamos hacia la carta
    setTimeout(function () {

        carta.scrollIntoView({
            behavior: "smooth"
        });

    }, 500);


    // Cambiamos el texto del botón
    boton.textContent = "Te amo 💛";

});


function crearFlor() {

    const flor = document.createElement("div");

    flor.classList.add("flor-animada");


    const flores = ["🌻", "🌼"];

    flor.textContent =
        flores[Math.floor(Math.random() * flores.length)];


    // Posición aleatoria
    flor.style.left =
        Math.random() * 100 + "vw";


    // Tamaño aleatorio
    flor.style.fontSize =
        Math.random() * 20 + 20 + "px";


    // Velocidad aleatoria
    flor.style.animationDuration =
        Math.random() * 3 + 4 + "s";


    document.body.appendChild(flor);


    // Eliminamos la flor después
    setTimeout(function () {

        flor.remove();

    }, 7000);

}

// ==========================
// VISOR DE FOTOS
// ==========================

const fotos = document.querySelectorAll(".foto img");

const visor = document.getElementById("visor");

const imagenGrande = document.getElementById("imagenGrande");

const cerrar = document.getElementById("cerrar");


fotos.forEach(function (foto) {

    foto.addEventListener("click", function () {

        imagenGrande.src = foto.src;

        visor.classList.add("activo");

    });

});


cerrar.addEventListener("click", function () {

    visor.classList.remove("activo");

});


visor.addEventListener("click", function (evento) {

    // Si toca el fondo negro, cerramos la foto
    if (evento.target === visor) {

        visor.classList.remove("activo");

    }

});

// ==========================
// MENSAJE FINAL
// ==========================

const btnFinal = document.getElementById("btnFinal");

const mensajeFinal = document.getElementById("mensajeFinal");


btnFinal.addEventListener("click", function () {

    mensajeFinal.classList.toggle("mostrar-final");

    if (mensajeFinal.classList.contains("mostrar-final")) {

        btnFinal.textContent = "Te amo 💛";

    } else {

        btnFinal.textContent = "Una última cosa... 💛";

    }

});