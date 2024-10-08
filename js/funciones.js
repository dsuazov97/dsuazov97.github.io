function reinicio() {
    const posicion = document.getElementById("carta");
    scrollToElement(posicion);
}

function reproyectos() {
    const posicion = document.getElementById("proyectos");
    scrollToElement(posicion);
}

function reexperiencia() {
    const posicion = document.getElementById("experiencia");
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
    const texto = "d.suazov97@gmail.com";
    const condicion = "[Copiado]";
    navigator.clipboard.writeText(texto);
    document.getElementById("contacto").innerHTML = texto + " " + condicion;
}

function copiarNumero(){
    const texto = "+56934414383";
    const condicion = "[Copiado]";
    navigator.clipboard.writeText(texto);
    document.getElementById("contacto").innerHTML = texto + " " + condicion;
}

function descargarCV() {
    const link = document.createElement('a');
    const texto = link.download;
    const condicion = "[Descargado]";
    navigator.clipboard.writeText(texto);
    link.href = 'doc/Currículum Diego Suazo.pdf';  
    link.download = 'CV_Diego_Suazo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.getElementById("contacto").innerHTML = texto + " " + condicion;
}