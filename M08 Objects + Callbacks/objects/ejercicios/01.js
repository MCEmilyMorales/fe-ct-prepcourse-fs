const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  var propiedadPunto = propiedad.split(".");

  if(propiedadPunto.length >= 2){
    return objeto[propiedadPunto[0]][propiedadPunto[1]]
  }

  var propiedades = propiedad.split('["').map(part => part.replace('"]', ''));

  if(propiedades.length >= 2){
  return objeto[propiedades[0]][propiedades[1]]
}
  else return objeto[propiedad]
};

module.exports = obtenerValorPropiedad;
