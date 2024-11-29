import { createInterface } from 'readline';
import { cubo, esImpar, getPenultimoElemento, aFormatoTitulo, filtrarImpares } from './exam.js';

// Define la función 'mostrarMenu' que muestra un menú al usuario y espera a que este seleccione una opción
function mostrarMenu() {
  console.log('Por favor, seleccione una opción:');
  console.log('1. Elevar un número al cubo');
  console.log('2. Verificar si un número es impar');
  console.log('3. Obtener el penúltimo elemento de un arreglo');
  console.log('4. Convertir una cadena a formato Título');
  console.log('5. Filtrar un arreglo por números impares');
  console.log('6. Salir');

  // Crea una instancia de 'readline' para leer la entrada del usuario
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Devuelve una promesa que se resuelve cuando el usuario introduce una opción
  return new Promise((resolver) => {
    readline.question('Ingrese su elección (1-6): ', (opcion) => {
      readline.close();
      resolver(opcion);
    });
  });
}

// Función auxiliar que obtiene un número del usuario
async function obtenerNumeroUsuario(mensaje) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolver) => {
    readline.question(mensaje, (entrada) => {
      readline.close();
      resolver(parseFloat(entrada)); // Convierte la entrada a un número de punto flotante
    });
  });
}

// Función auxiliar que obtiene una cadena de texto del usuario
async function obtenerCadenaUsuario(mensaje) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolver) => {
    readline.question(mensaje, (entrada) => {
      readline.close();
      resolver(entrada); // Devuelve la cadena ingresada por el usuario
    });
  });
}

// Función auxiliar que obtiene un arreglo del usuario
async function obtenerArregloUsuario(mensaje) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolver) => {
    readline.question(mensaje, (entrada) => {
      readline.close();
      resolver(entrada.split(',').map(Number)); // Convierte la entrada en un arreglo de números
    });
  });
}

// Función principal que ejecuta el menú y llama a las funciones según la opción seleccionada
async function main() {
  while (true) { // Bucle infinito para mostrar el menú repetidamente hasta que el usuario elija salir
    const opcion = await mostrarMenu();
    let resultado;

    switch (opcion) { // Ejecuta diferentes acciones según la opción seleccionada
      case '1':
        const numCubo = await obtenerNumeroUsuario('Ingrese un número para elevar al cubo: ');
        resultado = cubo(numCubo); // Llama a la función 'cubo' con el número ingresado
        console.log(`El cubo del número es: ${resultado}`);
        break;
      case '2':
        const numImpar = await obtenerNumeroUsuario('Ingrese un número para verificar: ');
        resultado = esImpar(numImpar); // Llama a la función 'esImpar' con el número ingresado
        console.log(`El número es ${resultado ? 'impar' : 'par'}`);
        break;
      case '3':
        const arregloPenultimo = await obtenerArregloUsuario('Ingrese un arreglo de números (máximo 6 elementos): ');
        resultado = getPenultimoElemento(arregloPenultimo); // Llama a la función 'getPenultimoElemento' con el arreglo ingresado
        if (resultado !== null) {
          console.log(`El penúltimo elemento es: ${resultado}`);
        }
        break;
      case '4':
        const cadena = await obtenerCadenaUsuario('Ingrese una cadena para convertir a formato Título: ');
        resultado = aFormatoTitulo(cadena); // Llama a la función 'aFormatoTitulo' con la cadena ingresada
        console.log(`La cadena en formato Título es: ${resultado}`);
        break;
      case '5':
        const arregloImpares = await obtenerArregloUsuario('Ingrese un arreglo de números (máximo 6 elementos): ');
        resultado = filtrarImpares(arregloImpares); // Llama a la función 'filtrarImpares' con el arreglo ingresado
        if (resultado !== null) {
          console.log(`Los números impares en el arreglo son: ${resultado}`);
        }
        break;
      case '6':
        console.log('Saliendo...'); // Muestra un mensaje de salida y termina el programa
        return;
      default:
        console.log('Opción inválida. Intente de nuevo.'); // Muestra un mensaje de error si la opción no es válida
    }
  }
}

// Comprueba si el script se está ejecutando directamente y llama a la función 'main'
if (import.meta.url === new URL(import.meta.url).href) {
  main();
}
