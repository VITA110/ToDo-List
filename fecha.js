function obtenerFechaActual() {
    const fecha = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
}

function actualizarFecha() {
    const contenedorFecha = document.getElementById('dateContainer');
    contenedorFecha.textContent = obtenerFechaActual();
}

actualizarFecha();

