function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var result = [];
  var tabla = 0
  for (let i = 0; i <= 10; i++) {
    tabla = i * 6
    result.push(tabla)
  }

  return result;
}

module.exports = tablaDelSeis;
