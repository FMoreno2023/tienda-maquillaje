let carrito = [];
 
 
// Agregar producto
function agregarAlCarrito(nombre, precio) {
 
    // Buscar si el producto ya está en el carrito
    const productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );
 
    if (productoExistente) {
 
        productoExistente.cantidad++;
 
    } else {
 
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
 
    }
 
    actualizarCarrito();
}
 
 
// Actualizar carrito
function actualizarCarrito() {
 
    const lista = document.getElementById("lista-carrito");
    const contador = document.getElementById("contador-carrito");
    const total = document.getElementById("total-carrito");
 
    lista.innerHTML = "";
 
    let cantidadTotal = 0;
    let totalCompra = 0;
 
 
    // Si está vacío
    if (carrito.length === 0) {
 
        lista.innerHTML = "<p>Tu carrito está vacío.</p>";
 
        contador.textContent = "0";
        total.textContent = "0";
 
        return;
    }
 
 
    // Mostrar productos
    carrito.forEach((producto, indice) => {
 
        cantidadTotal += producto.cantidad;
 
        const subtotal = producto.precio * producto.cantidad;
 
        totalCompra += subtotal;
 
 
        const elemento = document.createElement("div");
 
        elemento.innerHTML = `
            <p>
                <strong>${producto.nombre}</strong>
                <br>
 
                Precio: $${producto.precio}
 
                <br>
 
                Cantidad:
                <button onclick="cambiarCantidad(${indice}, -1)">
                    -
                </button>
 
                ${producto.cantidad}
 
                <button onclick="cambiarCantidad(${indice}, 1)">
                    +
                </button>
 
                <br>
 
                Subtotal: $${subtotal}
 
                <br>
 
                <button onclick="eliminarDelCarrito(${indice})">
                    Eliminar
                </button>
 
            </p>
 
            <hr>
        `;
 
        lista.appendChild(elemento);
 
    });
 
 
    contador.textContent = cantidadTotal;
 
    total.textContent = totalCompra;
}
 
 
// Cambiar cantidad
function cambiarCantidad(indice, cambio) {
 
    carrito[indice].cantidad += cambio;
 
 
    // Si llega a cero, eliminar
    if (carrito[indice].cantidad <= 0) {
 
        carrito.splice(indice, 1);
 
    }
 
 
    actualizarCarrito();
}
 
 
// Eliminar producto completo
function eliminarDelCarrito(indice) {
 
    carrito.splice(indice, 1);
 
    actualizarCarrito();
}
 
    carrito.splice(indice, 1);
 
    actualizarCarrito();
}
 
