function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var mesesEncontrados = array.filter((mes) => {
    if(
      mes === 'Enero' ||
      mes === 'Marzo' ||
      mes === 'Noviembre'
    ) {
      return mes;
    }
  });

  if(mesesEncontrados.length !== 3) {
    return "No se encontraron los meses pedidos";
  }
  return mesesEncontrados;
}

module.exports = mesesDelAño;
