'use strict';

const calculateRest = (dividendo, divisor) => {
  const resultado = dividendo/divisor;
  console.log(dividendo+'/'+divisor, resultado);
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
  console.log(numero+' / 2 = ', numero/2);
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
const numero = 37;
const primo = isPrime(numero);
console.log('O número '+numero+' é primo?', primo);

