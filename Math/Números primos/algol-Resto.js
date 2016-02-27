'use strict';

const divisor = 4;
const dividendo = 3

const calcularResto = (divisor, dividendo) => {
  const resultado = divisor/dividendo;
  console.log('resultado: ', resultado);
  return divisor - (dividendo * parseInt(resultado));
}

console.log('resto: ', calcularResto(divisor, dividendo));

