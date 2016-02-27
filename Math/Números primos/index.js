'use strict';

const testaNumeroPrimo = (numero) => {
  let primo = false;
  for(let contador = 2; contador <=4; contador++) {
    console.log(numero+'/'+contador, numero/contador)
    if(!numero/contador) {
      primo = true;
    }
    return primo;
  }
}

console.log(testaNumeroPrimo(84));