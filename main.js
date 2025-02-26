import { mostrarMenu, actualizarContador } from "./component/header/header.js";

function cargarDOM(){
    let DOM = document.querySelector("#root");
  DOM.appendChild (mostrarMenu());
  
}
cargarDOM();