function obtenerFechaActual() {
    const fecha = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
}

// Función para actualizar el contenedor de la fecha
function actualizarFecha() {
    const contenedorFecha = document.getElementById('dateContainer');
    contenedorFecha.textContent = obtenerFechaActual();
}

// Llamar a la función para actualizar la fecha al cargar la página
actualizarFecha();