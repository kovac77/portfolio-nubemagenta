function eliminarProducto(id) {
    id = parseInt(id);
    let arregloCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let productoExistente = arregloCarrito.find(producto => parseInt(producto.id) === id);

    if (productoExistente.cantidad > 1) {
        productoExistente.cantidad--;
    } else {
        arregloCarrito = arregloCarrito.filter(function (producto) {
            return parseInt(producto.id) !== id;
        });

    }
    //Guardar carrito en LocalStorage
    localStorage.setItem('carrito', JSON.stringify(arregloCarrito));
    //actualizar carrito
    localStorage.setItem('carrito-actualizado', Date.now().toString());
    cargarCarrito();
}


function vaciarCarrito() {
    localStorage.removeItem("carrito");
    //actualizar carrito
    localStorage.setItem('carrito-actualizado', Date.now().toString());
    location.reload();

}

/*guardar el la cantidad total para pasarlo actualizarlo en el icono del carrito*/
function actualizarIconoCarrito() {
    let arregloCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let totalCantidad = arregloCarrito.reduce((total, producto) => total + producto.cantidad, 0);

    localStorage.setItem('carrito-cantidad', totalCantidad);

    let iconoCarrito = document.getElementById('carrito-cantidad');
    if (iconoCarrito) {
        iconoCarrito.textContent = totalCantidad;
    }
}

/*dibujo los productos en el carrito*/
function cargarCarrito() {
    let arregloCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedorCarrito = document.querySelector('#tabla-carrito tbody');
    let totalCarrito=0;

    contenedorCarrito.innerHTML = "";
    arregloCarrito.forEach((producto) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td class="tabla-productos">
                <img src="${producto.imagenProducto}" alt="imagenProducto">
                <h6>${producto.nombreProducto}</h6>
            </td>
            <td class="tabla-precio">
                <h6>${parseFloat(producto.precioProducto).toFixed(2)}</h6>
            </td>
            <td class="tabla-cantidad">
                <input type="number" min="1" value="${producto.cantidad}" onchange="actualizarCantidad(${producto.id}, this.value)">
                <button class="delete btn btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
         `;

        contenedorCarrito.appendChild(fila);

        /*Total a pagar*/
        totalCarrito+= parseFloat(producto.precioProducto)* producto.cantidad;
    });

    document.getElementById('total-carrito').textContent= totalCarrito.toFixed(2);

    actualizarIconoCarrito();
}

function actualizarCantidad(id, nuevaCantidad) {
    let arregloCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = arregloCarrito.find(producto => parseInt(producto.id) === id);

    if (producto) {
        producto.cantidad = parseInt(nuevaCantidad);
        localStorage.setItem('carrito', JSON.stringify(arregloCarrito));

        cargarCarrito(); // Recargar el carrito
    }
}

/*Actualizar carrito*/
window.addEventListener('storage', function (event) {
    if (event.key === 'carrito-actualizado') {
        cargarCarrito();
    }
});

document.addEventListener("DOMContentLoaded", cargarCarrito);
