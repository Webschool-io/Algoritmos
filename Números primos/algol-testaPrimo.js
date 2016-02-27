'use strict';

const isInteger = (numero) => {
  let inteiro = false;
  if(Number.isInteger(numero)) {
    inteiro = true;
  }
  console.log('O número '+numero+' é inteiro?', inteiro);
  return inteiro;
}

// Definimos o estado atual
let primo = false;
const numero = 5;
// Não preciso testar se é divisível por 1 nem 2
for(let contador = 2; contador < numero; contador++) {
  // Preciso testar se o número tem algum divisor entre ele e 1
  // Se não achar nenhum divisor ele será PRIMO
  let resto = numero/contador;
  if(isInteger(resto) === false) {
    primo = true;
  }
  // Como definimos o estado inicial em FALSE
  // Só mudaremos ele qse for PRIMO, porém usado a mesma variável
  console.log('O número '+numero+' é primo?', primo);
  return primo
}