const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll(".card .btn");

/*
1.-se selecciona el ul con id carrito
2.-se selecciona el template con id template
3.-se crea un fragmento
4.-se seleccionan todos los botones con su clase

*/
const carritoObjeto = {};

const agregarFrutas = (e) => {
    
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };

    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1
    }
    
    carritoObjeto[producto.titulo] = producto;
    pintarCarrito();
};
/*
13.- se crea una variable que contiene un objeto vacio
15-21.- se crea una funcion que obtendra atributos y los guardara dentro de una varibale con valor objeto,se utiliza dataset.nombre con eso se accede al identificador
23-25.- se crea un condicional que tiene por funcion sumar 1 al atributo cantidad (int) si es que el titulo seleccionado esta repetido.
27-28.- estudiar objetos y corchetes. Se llama a la funcion pintarCarrito
*/
const pintarCarrito = () => {
    carrito.textContent = "";

    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;

        fragment.appendChild(clone)
    });

    carrito.appendChild(fragment);
}
/*
36.-se crea la funcion pintarCarrito que en resumen clonara el template y lo añadira al fragmento creado en la linea 3
37.- por duplicidad del forEach se deja sin textContent al ul (carrito)
39-45.- se recorre los valores del carritoObjeto,luego se clona el template, utilizando el firstElementChild para no tener inconveniente de Reflow. Luego, se seleccionan las tag span por su clase y luego se clonan. Por ultimo se añaden clone al fragmento y luego se añade el fragmento al carrito(ul)
*/
botones.forEach((btn)=> btn.addEventListener("click", agregarFrutas))
//se utiliza addEventlistener en los botones, escuchando el evento click y accionando la funcion agregarfrutas