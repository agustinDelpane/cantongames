function producto (id, nombre, precio, consola){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.consola = consola
}

const producto1 = new producto ("2498", "Days Gone", "$5000", "PS4")
const producto2 = new producto ("0418", "Star Wars KOTOR", "$4200", "Nintendo Switch")
const producto3 = new producto ("2418", "PES 2021", "$2000", "XBOne")
const producto4 = new producto ("2009", "Minecraft", "$1450", "PC")
const producto5 = new producto ("2013", "Grand Theft Auto: San Andreas", "$600", "PC")

const prodArray = [];
prodArray.push(producto1);
prodArray.push(producto2);
prodArray.push(producto3);
prodArray.push(producto4);
prodArray.push(producto5);


localStorage.setItem("bienvenida", "Buenos días!");
localStorage.setItem("descr", "Esta es mi pagina web diseñada en js");

let bienvenida = localStorage.getItem("bienvenida");
let descr = localStorage.getItem("descr");

console.log(bienvenida);
console.log(descr);

const jsonProd1 = JSON.stringify (producto1) ;
const jsonProd2 = JSON.stringify (producto2) ;
const jsonProd3 = JSON.stringify (producto3) ;
const jsonProd4 = JSON.stringify (producto4) ;
const jsonProd5 = JSON.stringify (producto5) ;

localStorage.setItem("producto1", jsonProd1);
    
        
const suma  = (a,b) => {return a + b};
const resta = (a,b) => {return a - b};
const multi = (a,b) => {return a * b};

        

$('body').prepend("<h1 class='titulo'>WallMaster Games</h1>");
$(".titulo").css({
    "font-size": "48px",
    "position": "relative",
    "top": "-37px",
    "left": "172px",
    "z-index": "1",
    "color": "white",
})
$('body').prepend("<h2 class='subTit'>Tu lugar de videojuegos</h2>")
$(".subTit").css({
    "font-size": "36px",
    "position": "relative",
    "top": "101px",
    "color": "white",
    "background-color": "rgb(52, 26, 166)",
    "padding": "7px 20px",
    "border": "solid rgb(52, 26, 166) 2px",
})

$(".navIdx").css({
    "position": "relative",
    "top": "-140px",
    "font-size": "48px",
    "padding": "10px 50px",
})

const URLGET   = "https://jsonplaceholder.typicode.com/posts"
const infoPost =  { nombre: promptMe }

$("body").prepend('<button id="btn1">Pulse aquí para recibir novedades</button>');
$(`#btn1`).on('click', function () { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            alert("Su email fue ingresado correctamente");
        }  
    });
});


function promptMe() {
    var promptPost = prompt("Ingrese su email");
    return promptPost
}

$("#btn1").css({
    "position": "absolute",
    "top": "2040px",
    "left": "700px",
    "padding": "15px 20px",
    "font-size": "25px",
})


const baseDeDatos = [
    {
        id: 418,
        nombre: 'Days Gone',
        precio: 5000,
        imagen: '../assets/img/dg.png',
    },
    {
        id: 2245,
        nombre: 'Star Wars KOTOR',
        precio: 4200,
        imagen: '../assets/img/kotor.png',
    },
    {
        id: 308,
        nombre: 'PES 2021',
        precio: 2000,
        imagen: '../assets/img/pes2021.png'
    },
    {
        id: 4189,
        nombre: 'Minecraft',
        precio: 1450,
        imagen: '../assets/img/minecraft.png'
    },
    {
        id: 519,
        nombre: 'GTA: San Andreas',
        precio: 600,
        imagen: '../assets/img/gtasa.png'
    },
    {
        id: 667,
        nombre: 'GTA: V',
        precio: 2200,
        imagen: '../assets/img/gtav.png'
    },
    {
        id: 789,
        nombre: 'Death Stranding',
        precio: 5500,
        imagen: '../assets/img/ds.png'
    },
    {
        id: 854,
        nombre: 'Left 4 Dead 2',
        precio: 200,
        imagen: '../assets/img/l4d.png'
    },
    {
        id: 912,
        nombre: 'XCOM 2',
        precio: 1250,
        imagen: '../assets/img/xcom.png'
    },
    {
        id: 100,
        nombre: 'Star Wars: Battlefront 2',
        precio: 840,
        imagen: '../assets/img/swb2.png'
    },
    {
        id: 113,
        nombre: 'Resident Evil 2',
        precio: 2200,
        imagen: '../assets/img/re2.png'
    },
    {
        id: 125,
        nombre: 'The Legend Of Zelda: BOTW',
        precio: 6000,
        imagen: '../assets/img/botw.png'
    },

];

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');

        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;

        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);

        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = info.precio + '$';

        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}


function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    calcularTotal();
    renderizarCarrito();
}

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);

        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
}

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
    calcularTotal();
}

function calcularTotal() {
    total = 0;
    carrito.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    DOMtotal.textContent = total.toFixed(2);
}

function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    calcularTotal();
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);

renderizarProductos();