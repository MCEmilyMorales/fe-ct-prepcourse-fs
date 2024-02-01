function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var aleatorio = Math.random(array);

  if ( Math.ceil(aleatorio * array.length) )

  return Math.ceil(aleatorio * array.length)
}

module.exports = obtenerElementoAleatorio;
