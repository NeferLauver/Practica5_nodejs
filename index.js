/* COMENZAMOS */

const prompt = require('prompt-sync')();

let nombres = [];

/* ESCRIBIR NOMBRES PARA EL CONTEO */

function obtenerNombre() {
  const nombre = prompt('Ingresa un nombre (o escribe "salir" para terminar): ');
  if (nombre.toLowerCase() === 'salir') {
    mostrarInformacion();
  } else {
    nombres.push(nombre);
    obtenerNombre();
  }
}
function mostrarInformacion() {
  console.log(`Cantidad de nombres ingresados: ${nombres.length}`);

  const nombresUnicos = [...new Set(nombres)];
  const hayRepetidos = nombres.length !== nombresUnicos.length;
  console.log(`Hay nombres repetidos: ${hayRepetidos ? 'Si' : 'No'}`);

  const nombreMasLargo = nombres.reduce((max, nombre) => (nombre.length > max.length) ? nombre : max, '');
  console.log(`Nombre más largo: ${nombreMasLargo}`);

  const nombreMasCorto = nombres.reduce((min, nombre) => (nombre.length < min.length || min === '') ? nombre : min, '');
  console.log(`Nombre más corto: ${nombreMasCorto}`);
}

console.log("Ingresa los nombres o Escribe 'salir' para terminar.");
obtenerNombre();
