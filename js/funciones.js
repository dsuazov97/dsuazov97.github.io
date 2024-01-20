function reinicio(){
    var posicion = document.getElementById("cont-titulo");
    window.scrollTo({
        top: posicion.offsetTop - 70,
        behavior: "smooth"
    });
}

function reproyectos(){
    var posicion = document.getElementById("proyectos");
    window.scrollTo({
        top: posicion.offsetTop - 70,
        behavior: "smooth"
    });
}

function recontacto(){
    var posicion = document.getElementById("contacto");
    window.scrollTo({
        top: posicion.offsetTop,
        behavior: "smooth"
    });
}