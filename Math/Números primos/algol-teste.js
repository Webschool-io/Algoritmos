'use strict';

const numero = 4;
// Definimos o estado atual
let primo = false;
// Não preciso testar se é divisível por 1
for(let contador = 2; contador < 4; contador++) {
  // Preciso testar se o número tem algum divisor entre ele e 1
  // Se não achar nennhum divisor ele será PRIMO
    console.log(numero+'/'+contador, numero/contador)
  if(numero/contador !== 0) {
    primo = true;
  }
}
// Como definimos o estado inicial em FALSE
// Só mudaremos ele qse for PRIMO, porém usado a mesma variável
console.log(primo);