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
  if(isInteger(numero/2)) {
    return false;
  }
  for(let contador = numero-1; contador <= numero; contador--) {
    if(contador === 2) {
      break;
    }
    console.log(numero+'/'+contador, numero/contador);
    if(!calculateRest(numero, contador)) {
      return false;
    }
  }
  return true;
}
const numero = 25;
const primo = isPrime(numero);
console.log('O número '+numero+' é primo?', primo);

