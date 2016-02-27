'use strict';

let inteiro = false;
const numero = 4;
const divisor = 3;
const resto = numero/divisor;

const isInteger = (numero) => {
  let inteiro = false;
  if(Number.isInteger(numero)) {
    inteiro = true;
  }

  console.log('O número '+numero+' é inteiro?', inteiro);
  return inteiro;
}

isInteger(resto);