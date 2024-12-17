function eliminarProducto(id) {
    id=parseInt(id);
    let arregloCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let productoExistente = arregloCarrito.find(producto => parseInt(producto.id) === id);

    if(productoExistente.cantidad > 1){
        productoExistente.cantidad--;
    }else{
        arregloCarrito = arregloCarrito.filter(function(producto) {
            return parseInt(producto.id) !== id;
        });

    }
     //Guardar carrito en LocalStorage
    localStorage.setItem('carrito', JSON.stringify(arregloCarrito));
    //actualizar carrito
    localStorage.setItem('carrito-actualizado', Date.now().toString()); 
    cargarCarrito();
}


function vaciarCarrito(){
    localStorage.removeItem("carrito");
    //actualizar carrito
    localStorage.setItem('carrito-actualizado', Date.now().toString()); 
    location.reload();
}

function cargarCarrito() {
    let arregloCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedorCarrito = document.getElementById('contenedor-carrito');

    contenedorCarrito.innerHTML = "";
    arregloCarrito.forEach((producto) => {
        let li = document.createElement("li");
        li.innerHTML = `
         ${producto.nombreProducto} - $ ${parseFloat(producto.precioProducto).toFixed(2)} x ${producto.cantidad}
        <button onclick="eliminarProducto(${producto.id})">Eliminar </button>
         `;

        contenedorCarrito.appendChild(li);
    });
}

window.addEventListener('storage', function(event) 
{ 
    if (event.key === 'carrito-actualizado') { 
        cargarCarrito(); 
    } 
});

document.addEventListener("DOMContentLoaded", cargarCarrito);
