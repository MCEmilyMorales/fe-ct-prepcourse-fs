function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var duplicado = array.map((x) => {return x * 2})
  return duplicado
}
module.exports = duplicarElementos;
