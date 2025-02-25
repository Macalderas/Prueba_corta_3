let contadorProductos = 0;

function mostrarMenu() {
    let header = document.createElement("header");
    header.innerHTML = `
        <nav>
            <div class="header-left">
                <img src="https://thumbs.dreamstime.com/b/simple-tienda-online-logo-concepto-vector-210636270.jpg" alt="Logo" class="logo">
                <h1 class="titulo">My store</h1>
            </div>
            <span>Productos marcados: <strong id="contador">${contadorProductos}</strong></span>
        </nav>
    `;
    document.body.prepend(header);
}

function actualizarContador(nuevoValor) {
    contadorProductos = nuevoValor;
    document.getElementById("contador").textContent = nuevoValor;
}

export { mostrarMenu, actualizarContador };
