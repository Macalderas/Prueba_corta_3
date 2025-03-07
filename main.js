import { cargarProductos, dataProducts } from "./component/catalogo/catalogo.js";
import { eliminarProducto } from "./component/funciones/funciones.js";
import { mostrarMenu, actualizarContador } from "./component/header/header.js";

function cargarDOM() {
    let DOM = document.querySelector("#root");
    DOM.appendChild(mostrarMenu());
    DOM.appendChild(cargarProductos());
}
cargarDOM();