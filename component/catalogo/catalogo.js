import { Productos } from "../itemProducto/itemProducto.js"; 

let dataProducts = [];


export function cargarProductos() {

    dataProducts = [
        { id: 1, name: "Coca-Cola", price: "Q 10.00", marked: false, image: "https://walmartgt.vtexassets.com/arquivos/ids/436737/Gaseosa-Coca-Cola-Regular-Lata-354-ml-2-33502.jpg?v=638392665722470000" },
        { id: 2, name: "Pepsi", price: "Q 8.00", marked: false, image: "https://walmartgt.vtexassets.com/arquivos/ids/219626/Refresco-Gaseosa-Pepsi-Reg-Lata-335-Ml-1-27411.jpg?v=637721014172300000" },
        { id: 3, name: "Fanta", price: "Q 7.50", marked: false, image: "https://www.coca-cola.com/content/dam/onexp/gt/es/brands/fanta/kolc-gu-fanta-naranja-600ml-pet-spiral-front-sudado-0822.png" },
        { id: 4, name: "Sprite", price: "Q 8.00", marked: false, image: "https://walmartgt.vtexassets.com/arquivos/ids/398026/Gaseosa-Sprite-regular-355-ml-2-27600.jpg?v=638307346499000000" },
        { id: 5, name: "Gapete", price: "Q 4.50", marked: false, image: "https://cemacogt.vtexassets.com/arquivos/ids/358618/965277_1.jpg?v=638439173557770000" },
        { id: 6, name: "lipton", price: "Q 9.50", marked: false, image: "https://i0.wp.com/superlacasita.com.gt/wp-content/uploads/2020/05/Lipton-Limon-600-ml.jpg?fit=600%2C600&ssl=1" },
        { id: 7, name: "tiki", price: "Q 4.00", marked: false, image: "https://i0.wp.com/elgranahorro.com.gt/wp-content/uploads/2022/04/901936-TIKI-LATA-350-ML.jpg?fit=1040%2C10402C1040&ssl=1" },
        { id: 8, name: "shaka laka", price: "Q 3.00", marked: false, image: "https://superlacasita.com.gt/wp-content/uploads/2020/07/Shaka-Laka-Vainilla-Tetra-200-ml.jpg" },
        { id: 9, name: "kerns", price: "Q 4.00", marked: false, image: "https://elgranahorro.com.gt/wp-content/uploads/2022/04/901363-KERNS-NECTAR-MANZ-TETRA-250ML.jpg" },
        { id: 10, name: "kerns", price: "Q 12.50", marked: false, image: "https://walmartgt.vtexassets.com/arquivos/ids/171478/Gaseosa-Mirinda-Naranja-2000Ml-1-27410.jpg?v=637606639632700000" }
    ];
    return Productos(dataProducts);
}

export { dataProducts };