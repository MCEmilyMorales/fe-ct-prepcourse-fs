function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  if(objeto.enumerable === false){
    return false
  }
  if (objeto.hasOwnProperty(propiedad)) {
    return true;
  }
  if (propiedad in objeto){
    return true
  }
 else return false
}

module.exports = verificarPropiedad;
