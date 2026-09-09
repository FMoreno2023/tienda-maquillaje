let carrito = [];
 
function agregarAlCarrito(nombre, precio) {
 
    let producto = carrito.find(p => p.nombre === nombre);
 
    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }
 
    actualizarCarrito();
}
 
 
function actualizarCarrito() {
 
    let lista = document.getElementById("lista-carrito");
    let contador = document.getElementById("contador-carrito");
    let total = document.getElementById("total-carrito");
 
    lista.innerHTML = "";
 
    let totalProductos = 0;
    let totalCompra = 0;
 
 
    if (carrito.length === 0) {
 
        lista.innerHTML = "<p>Tu carrito está vacío.</p>";
        contador.textContent = "0";
        total.textContent = "0";
 
        return;
    }
 
 
    carrito.forEach(function(producto, indice) {
 
        let subtotal = producto.precio * producto.cantidad;
 
        totalProductos += producto.cantidad;
        totalCompra += subtotal;
 
 
        let elemento = document.createElement("div");
 
        elemento.innerHTML = `
            <h3>${producto.nombre}</h3>
 
            <p>Precio: $${producto.precio}</p>
 
            <p>
                Cantidad:
 
                <button onclick="cambiarCantidad(${indice}, -1)">
                    -
                </button>
 
                <strong>${producto.cantidad}</strong>
 
                <button onclick="cambiarCantidad(${indice}, 1)">
                    +
                </button>
            </p>
 
            <p>Subtotal: $${subtotal}</p>
 
            <button onclick="eliminarDelCarrito(${indice})">
                Eliminar
            </button>
 
            <hr>
        `;
 
        lista.appendChild(elemento);
 
    });
 
 
    contador.textContent = totalProductos;
    total.textContent = totalCompra;
}
 
 
function cambiarCantidad(indice, cambio) {
 
    carrito[indice].cantidad += cambio;
 
    if (carrito[indice].cantidad <= 0) {
        carrito.splice(indice, 1);
    }
 
    actualizarCarrito();
}
 
 
function eliminarDelCarrito(indice) {
 
    carrito.splice(indice, 1);
 
    actualizarCarrito();
}
 
