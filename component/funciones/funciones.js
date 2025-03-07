import { dataProducts } from "../catalogo/catalogo.js"; 
import { Productos } from "../itemProducto/itemProducto.js"; 
import { actualizarContador } from "../header/header.js"; 

export function eliminarProducto(id) {
    const index = dataProducts.findIndex(p => p.id === id);
    if (index !== -1) {
        dataProducts.splice(index, 1);
    }
    actualizarContador(dataProducts.length);

    const container = document.querySelector("#productos-container");
    if (container) {
        const nuevosProductos = Productos(dataProducts);
        container.replaceWith(nuevosProductos);
    }
}