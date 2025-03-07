import { eliminarProducto } from '../funciones/funciones.js'; 
export function Productos(dataProducts) {
    const container = document.createElement("div");
    container.id = "productos-container";

    dataProducts.forEach(producto => {
        const productDiv = document.createElement("div");
        productDiv.className = "producto";

        const img = document.createElement("img");
        img.src = producto.image; 
        img.alt = producto.name;
        img.className = "producto-imagen"; 
        
        const name = document.createElement("p");
        name.className = "producto-nombre";
        name.textContent = producto.name;

        const price = document.createElement("p");
        price.className = "producto-precio";
        price.textContent = producto.price;

        const btnEliminar = document.createElement("button");
        btnEliminar.className = "eliminar-btn";
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => eliminarProducto(producto.id); 
        productDiv.append(img, name, price, btnEliminar);
        container.appendChild(productDiv);
    });
    return container;
}