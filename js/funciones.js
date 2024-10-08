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

// function descargarCV() {
//     const texto = "Currículum Diego Suazo";
//     const condicion = "[Descargado]";
//     const link = document.createElement('a');
//     navigator.clipboard.writeText(texto);
//     link.href = 'doc/Currículum Diego Suazo.pdf';  
//     link.download = 'Currículum Diego Suazo.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     document.getElementById("contacto").innerHTML = texto + " " + condicion;
// }

function descargar(archivo) {
    let texto = "";
    const condicion = "[Descargado]";
    const link = document.createElement('a');
    switch(archivo){
        case toeic:
            texto = "TOEIC Bridge";
            link.href = 'doc/TOEIC.pdf';  
            link.download = 'TOEIC Bridge.pdf';
            break;
        case scrum:
            texto = "Certificado Scrum";
            link.href = 'doc/Certificate Scrum.pdf';  
            link.download = 'Certificado Scrum.pdf';
            break;
        case curriculum:
            texto = "Currículum Diego Suazo";
            link.href = 'doc/Currículum Diego Suazo.pdf';  
            link.download = 'Currículum Diego Suazo.pdf';
            break;
        default:
        console.error('Archivo no reconocido');
        return;
    }
    navigator.clipboard.writeText(texto);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.getElementById("contacto").innerHTML = texto + " " + condicion;
}