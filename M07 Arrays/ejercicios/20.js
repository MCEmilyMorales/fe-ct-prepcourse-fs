function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var numerosPar = 0

  for(var i = 0; i < numeros.length;  i++){
    var numeroImpar = numeros[i]

    if(numeroImpar %2 !== 0){
      continue
    }
    
   numerosPar++
  }
  return numerosPar
}

module.exports = contarParesConContinue;
