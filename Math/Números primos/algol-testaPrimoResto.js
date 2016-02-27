'use strict';

const calculateRest = (dividendo, divisor) => {
  const resultado = dividendo/divisor;
  console.log('resultado: ', resultado);
  return (dividendo - (divisor * parseInt(resultado)));
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
const numero = 5;
const primo = isPrime(numero);
console.log('O número '+numero+' é primo?', primo);

