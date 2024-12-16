

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
                            <div class="tarjeta" id="${producto.id}" nombre="${producto.nombre}" precio="${producto.precio}" descripcion="${producto.descripcion}" imagen="${producto.urlImagen}">
                                <h5>${producto.nombre}</h5>
                                <img src="${producto.urlImagen}" class="img-tarjeta"
                                    alt="imagen-producto">
                                <div class="link-tarjeta">
                                    <a href="#" onclick="agregarAlCarrito('${producto.id}')><i class="fa-regular fa-eye"></i></a>
                                    <a href="carrito.html"><i class="fa-solid fa-cart-plus"></i></a>
                                    <a href="carrito.html"><i class="fa-solid fa-heart"></i></a>
                                </div>
                            </div>`;
        seccionProductos.append(divNuevo);
    });

});

function agregarAlCarrito(id){
    //obtener elemento por su id
    const idProducto=document.getElementById(id);
    //atributos del producto
    const nombreProducto= idProducto.getAttribute('nombre');
    const precioProducto= idProducto.getAttribute('precio');
    const descripcionProducto= idProducto.getAttribute('descripcion');
    const imagenProducto= idProducto.getAttribute('imagen');

    //Obatener carrito del LocalStorage o vacio y asignarselo a arregloCarrito
    let arregloCarrito= JSON.parse(localStorage.getItem('carrito')) || [];
    //agregar el producto al arregloCarrito
    arregloCarrito.push({id: id, nombreProducto, precioProducto, descripcionProducto, imagenProducto});
    //Guardar carrito en LocalStorage
    localStorage.setItem('carrito', JSON.stringify(arregloCarrito))
}


// function actualizarCarrito(){
//     let arregloCarrito= JSON.parse(localStorage.getItem("carrito")) || [];
//     let contenedorProductos= document.getElementById("contenedor-producto1");
//     contenedorProductos.innerHTML="";
//     arregloCarrito.forEach((producto) =>{

//     });
// }
