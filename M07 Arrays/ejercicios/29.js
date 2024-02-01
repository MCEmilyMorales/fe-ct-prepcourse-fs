function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
if(numeros.length === 0){return null}
 
 for (var i = 0; i < numeros.length -1; i++) {
   
   var arregloOrdenado = numeros[i] + 1
   if(arregloOrdenado != numeros [i + 1]){
     return arregloOrdenado
    }
  }
  return null
}             

module.exports = encontrarNumeroFaltante;