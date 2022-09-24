let cambio=window.document.getElementById('tama');
cambio.addEventListener('input',cambiaFuente);

function cambiaFuente () {
    let miTexto=window.document.getElementById('parrafo');
    miTexto.style.fontSize=cambio.value + "em";
}