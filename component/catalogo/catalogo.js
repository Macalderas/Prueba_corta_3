import { Productos } from "../itemProducto/itemProducto.js"; 

let dataProducts = [];


export function cargarProductos() {

    dataProducts = [
        { id: 1, name: "Coca-Cola", price: "Q 10.00", marked: false, image: "https://walmartgt.vtexassets.com/arquivos/ids/436737/Gaseosa-Coca-Cola-Regular-Lata-354-ml-2-33502.jpg?v=638392665722470000" },
        { id: 2, name: "Pepsi", price: "Q 8.00", marked: false, image: "https://walmartgt.vtexassets.com/arquivos/ids/219626/Refresco-Gaseosa-Pepsi-Reg-Lata-335-Ml-1-27411.jpg?v=637721014172300000" },
        { id: 3, name: "Fanta", price: "Q 7.50", marked: false, image: "https://www.coca-cola.com/content/dam/onexp/gt/es/brands/fanta/kolc-gu-fanta-naranja-600ml-pet-spiral-front-sudado-0822.png" },
        { id: 4, name: "Sprite", price: "Q 8.00", marked: false, image: "https://walmartgt.vtexassets.com/arquivos/ids/398026/Gaseosa-Sprite-regular-355-ml-2-27600.jpg?v=638307346499000000" },
        { id: 5, name: "Gapete", price: "Q 4.50", marked: false, image: "https://cemacogt.vtexassets.com/arquivos/ids/358618/965277_1.jpg?v=638439173557770000" },
    ];
    return Productos(dataProducts);
}

export { dataProducts };