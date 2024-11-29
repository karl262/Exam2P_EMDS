// 1. cubo(num)
export function cubo(num) {
  return num ** 3;
}

// 2. esImpar(num)
export function esImpar(num) {
  return num % 2 !== 0;
}

// 3. getPenultimoElemento(arreglo)
export function getPenultimoElemento(arreglo) {
  if (arreglo.length < 2) {
    return null;
  }
  if (arreglo.length > 6 || !arreglo.every(num => Number.isInteger(num) && num >= 0)) {
    return null;
  }
  return arreglo[arreglo.length - 2];
}

// 4. aFormatoTitulo(cadena)
export function aFormatoTitulo(cadena) {
  return cadena.replace(/\w\S*/g, (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase());
}

// 5. filtrarImpares(arreglo)
export function filtrarImpares(arreglo) {
  if (arreglo.length === 0) {
    return null;
  }
  if (arreglo.length > 6 || !arreglo.every(num => Number.isInteger(num) && num >= 0)) {
    return null;
  }
  const impares = arreglo.filter((num) => num % 2 !== 0);
  return impares.length > 0 ? impares : 'No hay números impares en el arreglo.';
}
