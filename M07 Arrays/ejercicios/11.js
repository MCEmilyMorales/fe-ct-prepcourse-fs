function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
var nuevoArray = array.map((num, index)=> {return num * index})
return nuevoArray
}
module.exports = multiplicarElementosPorIndice;
