

/*lista de productos*/
let productos = [
    {
        "id": 1,
        "nombre": "Titulo 1",
        "precio": 12.50,
        "descripcion": "Descripcion 1",
        "urlImagen": "./imagenes/galeria/tanjiro.png"
    },
    {
        "id": 2,
        "nombre": "Titulo 2",
        "precio": 12.50,
        "descripcion": "Descripcion 2",
        "urlImagen": "./imagenes/galeria/tanjiro.png",
    },

];

/*insertar los productos dentro de la seccion "productos"*/

/*Seleccionar la seccion "productos"*/
let seccionProductos = document.getElementById('producto1');

/*Creo un div nuevo con la clase '.contenedor-producto1'*/
let divNuevo = document.createElement('div');
divNuevo.classList.add('contenedor-producto1');


document.addEventListener("DOMContentLoaded", (event) => {
    productos.forEach(producto => {
        divNuevo.innerHTML += `
                            <div class="tarjeta">
                                <h5>${producto.nombre}</h5>
                                <img src="${producto.urlImagen}" class="img-tarjeta"
                                    alt="imagen-producto">
                                <div class="link-tarjeta">
                                    <a href="carrito.html"><i class="fa-regular fa-eye"></i></a>
                                    <a href="carrito.html"><i class="fa-solid fa-cart-plus"></i></a>
                                    <a href="carrito.html"><i class="fa-solid fa-heart"></i></a>
                                </div>
                            </div>`;
        seccionProductos.append(divNuevo);
    });

});

