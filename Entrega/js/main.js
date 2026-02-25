// --- CLASE PARA OBJETOS ---
class Hallazgo {
    constructor(id, tipo, material) {
        this.id = id.toUpperCase();
        this.tipo = tipo;
        this.material = material;
        this.fecha = new Date().toLocaleDateString();
    }
}

// --- SELECTORES DEL DOM ---
const formulario = document.querySelector("#formulario-hallazgo");
const contenedorLista = document.querySelector("#lista-hallazgos");
const btnLimpiar = document.querySelector("#btn-limpiar");

// --- LÓGICA DE STORAGE ---
// Intentamos cargar datos previos de localStorage o inicializamos array vacío
let inventario = JSON.parse(localStorage.getItem("inventarioArqueologico")) || [];

// --- FUNCIONES ---

// Función para renderizar el inventario en el HTML
function mostrarInventario() {
    contenedorLista.innerHTML = ""; // Limpiamos antes de redibujar

    inventario.forEach((pieza, index) => {
        const div = document.createElement("div");
        div.classList.add("pieza-card");
        div.innerHTML = `
            <p><strong>ID:</strong> ${pieza.id}</p>
            <p><strong>Tipo:</strong> ${pieza.tipo}</p>
            <p><strong>Material:</strong> ${pieza.material}</p>
            <small>Registrado el: ${pieza.fecha}</small>
            <hr>
        `;
        contenedorLista.appendChild(div);
    });
}

// Función para guardar en LocalStorage
function guardarEnStorage() {
    localStorage.setItem("inventarioArqueologico", JSON.stringify(inventario));
}

// --- EVENTOS ---

// Evento de envío de formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Captura de datos de los inputs
    const id = document.querySelector("#input-id").value;
    const tipo = document.querySelector("#input-tipo").value;
    const material = document.querySelector("#input-material").value;

    // Crear instancia y procesar
    const nuevaPieza = new Hallazgo(id, tipo, material);
    inventario.push(nuevaPieza);

    // Actualizar Interfaz y Storage
    guardarEnStorage();
    mostrarInventario();

    formulario.reset(); // Limpia los campos
});

// Evento para limpiar todo el inventario
btnLimpiar.addEventListener("click", () => {
    inventario = [];
    localStorage.clear();
    mostrarInventario();
});

// Ejecución inicial al cargar la página
mostrarInventario();