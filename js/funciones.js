function reinicio() {
    var posicion = document.getElementById("cont-titulo");
    scrollToElement(posicion);
}

function reproyectos() {
    var posicion = document.getElementById("proyectos");
    scrollToElement(posicion);
}

function remanejo() {
    var posicion = document.getElementById("manejo");
    scrollToElement(posicion);
}

function scrollToElement(elemento) {
    if (elemento) {
        window.scrollTo({
            top: elemento.offsetTop - 80,
            behavior: "smooth"
        });
    } else {
        console.error('El elemento no se encontró en el DOM.');
    }
}


