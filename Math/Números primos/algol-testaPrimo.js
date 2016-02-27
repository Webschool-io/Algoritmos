'use strict';

const isInteger = (numero) => {
  let inteiro = false;
  if(Number.isInteger(numero)) {
    inteiro = true;
  }
  console.log('O número '+numero+' é inteiro?', inteiro);
  return inteiro;
}

const isPrime = (numero) => {
  if(isInteger(numero/2)) {
    return false;
  }
  for(let contador = 3; contador < numero; contador++) {
    // Preciso testar se o número tem algum divisor entre ele e 1
    // Se não achar nenhum divisor ele será PRIMO
    let resultado = numero/contador;
    if(isInteger(resultado)) {
      return false;
    }
  }
  return true;
}
const numero = 273;
const primo = isPrime(numero);

console.log('O número '+numero+' é primo?', primo);
