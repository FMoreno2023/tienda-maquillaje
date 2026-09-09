// Lista donde guardaremos los productos
let carrito = [];
 
 
// Agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
 
    const producto = {
        nombre: nombre,
        precio: precio
    };
 
    carrito.push(producto);
 
    actualizarCarrito();
}
 
 
// Actualizar el carrito en pantalla
function actualizarCarrito() {
 
    const lista = document.getElementById("lista-carrito");
    const contador = document.getElementById("contador-carrito");
    const total = document.getElementById("total-carrito");
 
    // Actualizar contador
    contador.textContent = carrito.length;
 
    // Limpiar la lista
    lista.innerHTML = "";
 
    // Si no hay productos
    if (carrito.length === 0) {
 
        lista.innerHTML = "<p>Tu carrito está vacío.</p>";
 
        total.textContent = "0";
 
        return;
    }
 
 
    // Mostrar cada producto
    let totalCompra = 0;
 
    carrito.forEach((producto, indice) => {
 
        totalCompra += producto.precio;
 
        const elemento = document.createElement("div");
 
        elemento.innerHTML = `
            <p>
                <strong>${producto.nombre}</strong>
                - $${producto.precio}
 
                <button onclick="eliminarDelCarrito(${indice})">
                    Eliminar
                </button>
            </p>
        `;
 
        lista.appendChild(elemento);
 
    });
 
 
    // Mostrar total
    total.textContent = totalCompra;
}
 
 
// Eliminar producto
function eliminarDelCarrito(indice) {
 
    carrito.splice(indice, 1);
 
    actualizarCarrito();
}
 
