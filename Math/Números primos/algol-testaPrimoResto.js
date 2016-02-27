'use strict';

const calculateRest = (divisor, dividendo) => {
  const resultado = divisor/dividendo;
  console.log('resultado: ', resultado);
  return (divisor - (dividendo * parseInt(resultado)));
}

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
    if(!calculateRest(numero, contador)) {
      return false;
    }
  }
  return true;
}
const numero = 12;
const primo = isPrime(numero);
console.log('O número '+numero+' é primo?', primo);

