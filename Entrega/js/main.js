// --- VARIABLES, CONSTANTES Y ARRAYS ---
const INSTITUCION = "CONICET - IDECU - FILO";
let inventario = [];
let continuar = true;

// --- FUNCIONES ---

// 1. Función de Entrada de Datos
function solicitarDatosHallazgo() {
    let id = prompt("Ingrese el código de la pieza (ej. Sitio-001):");
    let tipo = prompt("Tipo de hallazgo (ej. Cerámica, Lítico, Óseo):");
    let material = prompt("Material predominante:");
    
    return { id, tipo, material };
}

// 2. Función de Procesamiento
function agregarAlInventario(pieza) {
    if (pieza.id && pieza.tipo) {
        inventario.push(pieza);
        console.log("Pieza registrada: " + pieza.id);
    } else {
        alert("Error: Datos incompletos. La pieza no fue registrada.");
    }
}

// 3. Función de Salida de Datos
function mostrarResumen() {
    let listado = "Resumen de Campaña (" + INSTITUCION + "):\n";
    
    // Ciclo de iteración para recorrer el array
    for (let i = 0; i < inventario.length; i++) {
        listado += (i + 1) + ". ID: " + inventario[i].id + " | Tipo: " + inventario[i].tipo + "\n";
    }

    if (inventario.length > 0) {
        alert(listado);
        console.table(inventario); // Muestra una tabla estética en consola
    } else {
        alert("No se registraron hallazgos en esta sesión.");
    }
}

// --- ALGORITMO PRINCIPAL CON CICLO Y CONDICIONAL ---

alert("Bienvenido al Sistema de Registro de Campaña - " + INSTITUCION);

while (continuar) {
    let nuevaPieza = solicitarDatosHallazgo();
    agregarAlInventario(nuevaPieza);

    // Confirm devuelve true/false
    continuar = confirm("¿Desea registrar otra pieza arqueológica?");
}

// Invocación final para mostrar resultados
mostrarResumen();