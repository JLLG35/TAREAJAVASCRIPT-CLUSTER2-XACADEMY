// Del ejemplo 1
function elementosCoincidentes(array1, array2) {
    const resultado = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        resultado.push(array1[i]);
      }
    }
    return resultado;
  }
  
  const array1 = ['rojo', 'azul', 'amarillo'];
  const array2 = ['blanco', 'negro', 'rojo'];
  console.log(elementosCoincidentes(array1, array2));
  
  
  // Del ejemplo 2
  function elementosCoincidentes(array1, array2) {
    const resultado = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        resultado.push(array1[i]);
      }
    }
    return resultado;
  }
  
  const array3 = [4, 3, true, 'manzana'];
  const array4 = ['pera', 3, false, true, 3, true];
  console.log(elementosCoincidentes(array3, array4));