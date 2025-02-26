let contadorProductos = 0;

function mostrarMenu() {
    let header = document.createElement("header");

    let nav = document.createElement("nav");

    let headerLeft = document.createElement("div");
    headerLeft.className = "header-left"; 

    let logo = document.createElement("img");
    logo.src = "https://thumbs.dreamstime.com/b/simple-tienda-online-logo-concepto-vector-210636270.jpg";
    logo.alt = "Logo";
    logo.className = "logo"; 

    let titulo = document.createElement("h1");
    titulo.className = "titulo"; 
    titulo.textContent = "My store"; 

    headerLeft.appendChild(logo);
    headerLeft.appendChild(titulo);

    let contadorSpan = document.createElement("span");
    contadorSpan.textContent = `Productos marcados: `;

    let contadorStrong = document.createElement("strong");
    contadorStrong.id = "contador"; 
    contadorStrong.textContent = contadorProductos; 

    contadorSpan.appendChild(contadorStrong);

    nav.appendChild(headerLeft);
    nav.appendChild(contadorSpan);

    header.appendChild(nav);

    return header;
}

function actualizarContador(nuevoValor) {
    contadorProductos = nuevoValor;
    document.getElementById("contador").textContent = nuevoValor;
}

export { mostrarMenu, actualizarContador };