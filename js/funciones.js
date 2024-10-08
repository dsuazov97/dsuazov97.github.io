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
    const copiado = "[Copiado]";
    navigator.clipboard.writeText(texto);
    document.getElementById("contacto").innerHTML = texto + " " + copiado;
}

function copiarNumero(){
    const texto = "+56934414383";
    const copiado = "[Copiado]";
    navigator.clipboard.writeText(texto);
    document.getElementById("contacto").innerHTML = texto + " " + copiado;
}

function descargarCV() {
    const link = document.createElement('a');
    link.href = 'doc/Currículum Diego Suazo.pdf';  
    link.download = 'CV_Diego_Suazo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    navigator.clipboard.writeText("[Descargando]");

}