function reinicio() {
    var posicion = document.getElementById("cont-titulo");
    scrollToElement(posicion);
}

function reproyectos() {
    var posicion = document.getElementById("proyectos");
    scrollToElement(posicion);
}

function reexperiencia() {
    var posicion = document.getElementById("experiencia");
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

function copiarEmail(){
    var texto = "d.suazov97@gmail.com";
    var copiado = "[Copy]";
    navigator.clipboard.writeText(texto);
    document.getElementById("contacto").innerHTML = texto + " " + copiado;
}

function copiarNumero(){
    var texto = "+56934414383";
    var copiado = "[Copy]";
    navigator.clipboard.writeText(texto);
    document.getElementById("contacto").innerHTML = texto + " " + copiado;
}