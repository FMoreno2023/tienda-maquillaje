// Aquí guardaremos los productos del carrito
let carrito = [];
 
 
// Función para agregar un producto
function agregarAlCarrito(nombre, precio) {
 
    const producto = {
        nombre: nombre,
        precio: precio
    };
 
    carrito.push(producto);
 
    alert(nombre + " se agregó al carrito");
 
    console.log(carrito);
}
 
