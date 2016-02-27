# Algoritmo - Números primos

##Definição

A definição de um número primo é:

>  úmero primo, é um número p cujo conjunto dos divisores não inversíveis não é vazio, e todos os seus elementos são produtos de p por números inteiros inversíveis. De acordo com esta definição, 0, 1 e -1 não são números primos.

fonte: [https://pt.wikipedia.org/wiki/N%C3%BAmero_primo](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)

Mas o que isso significa?

Basicamente que para um número inteiro ser primo é aquele que tem unicamente dois divisores naturais distintos: 

- o número 1;
- ele mesmo.

Sabendo disso ficou fácil iniciarmos o algoritmo, primeiramente escrevemos as regras explícitas, não precisamos testar se o número é divisível por 1, mas sim precisamos testar se o número **tem algum divisor entre ele e 1**.

Para fazer iremos utilizar a mesma lógica da função `multiplicar/dividir` do [Curso de Matemática para Programadores](https://github.com/Webschool-io/matematica-para-programadores).

Nesse caso precisamos pegar o número e ir testando se ele divide pelos números anteriores a ele indo até 2, **caso ele não encontre nenhum número que seja seu divisor** então ele será primo.

Para escrever isso como algoritmo eu preciso entender antes o conceito de *loop*.

O *loop* na programação é uma função que irá executar um número pré-definido de vezes, para exemplificar isso utilizarei a função `for` que se encontra em quase todas as linguagens, porém utilizarei JavaScript.

Antes de criamos o algoritmo precisamos entender como a divisão funciona por aqui.

Se eu dividir 4 por 2, que são divisores, o resultado é 2. E se eu dividir 4 por 3?

Vai resultar em um dízima periódica: `1.333333`.

Ou seja, analisando o resultado dessas 2 operações, **como você acha que testaremos se um número é divisível por outro?**

```js
const numero = 4;
const divisor = 2;
if(numero/divisor) ???
```

Bom apenas dividir nossos números não nos resolve o problema, precisamos testar é o **resto da divisão**.

**Então qual será a lógica?**

Pense comigo:

> Todo número dividido por um divisor irá **sempre** resultar em um número inteiro!

Ou seja, se você dividir um número por outro **que não seja seu divisor**, por exemplo `3/2`, o resultado **NUNCA** será inteiro, sendo assim o resto da divisão **NUNCA** resultará em 0.

Para entender melhor o algoritmo de divisão [leia mais aqui]()

Na programação podemos testar isso de 2 formas:

- testando o resultado se é inteiro;
- testando o resto da divisão se é 0.

Vamos iniciar nosso algoritmo

## Testando se o resultado da divisão é inteiro

Ainda bem que o JavaScript nos provê a função `Number.isInteger()` que irá fazer teste automaticamente:

```js
let primo = false;
const numero = 4;
const divisor = 2;
const resultado = numero/divisor;

if(Number.isInteger(resultado)) {
  primo = true;
}

console.log('O resultado da divisão entre '+numero+' e '+divisor+' é inteiro?', primo);
```

Você pode executar esse código diretamente do seu navegador, entrando no Console (favor pesquisar como fazer em seu Navegador).

Perceba que no `if` estou chamando a função `Number.isInteger` passando como parâmetro o resultado da divisão, essa mesma função irá retornar verdadeiro(`true`) caso o número seja inteiro ou falso(`false`) caso não.

Para facilitar nossa vida futura irei encapsular essa lógica para poder sempre reusar, basta apenas criar uma função para tal:

```js
let primo = false;
const numero = 4;
const divisor = 3;
const resultado = numero/divisor;

const isInteger = (numero) => {
  if(Number.isInteger(numero)) {
    inteiro = true;
  }
  console.log('O número '+numero+' é inteiro?', inteiro);
  return inteiro;
}

isInteger(resultado);
```

Bom, você deve ter percebido que utilizei `let` e `const` para definir os valores, a diferença básica entre elas é que usando `const` o valor definido não pode ser mais modificado e com `let` pode.

Depois crio a função com `const isInteger = (numero) => { ... }`, onde a definição da função é `(numero) => { ... }`.

Claramente você percebe que a definição dos parâmetros da função são feitos em `(numero)`, antes da `=>` que é a definição da função propriamente dita.

Depois executo a função `isInteger(resultado)` passando a constante do `resultado` da divisão.

**Agora com esse conhecimento o que você acha que devemos fazer?**

Iniciamos adicionando nossa função para usá-la para testar o resultado das divisões do nosso número a ser testado, isso por quê?

Pois para um número ser primo nós precisaremos testar o resultado da divisão dele por todos seus números anteriores acima de 2.

```js
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
  let resultado = numero/contador;
  if(isInteger(resultado) === false) {
    primo = true;
  }
  console.log('Contador: ', contador);
  console.log('Resultado: ', resultado);
  // Como definimos o estado inicial em FALSE
  // Só mudaremos ele se for PRIMO, porém usado a mesma variável
  console.log('O número '+numero+' é primo?', primo);
  return primo
}
```

Percebeu que no teste do for eu não passo uma valor abritrário, mas sim testo se o `contador` é menor que o `numero`(5), quando o `contador` tiver o valor de 5 ele irá sair.

Como iremos testar algo sempre devemos partir do pressuposto que é falso e com nossa lógica iremos testar para mudar esse estado.

No código acim estamos simplesmente retornando falso se o número for divisível por outro menor que ele e maior que 2.

Caso você não tenha entendido essa linha:

```js
for(let contador = 2; contador < 4; contador++)
```

A função `for` recebe 3 parâmetros:

- atribuição do valor inicial do contador;
- teste para saída do *looping*;
- incrementação(adição de 1) do contador.

Precisamos de um contador para poder saber quantos *loopings* ele fez e para poder sair dele, pois caso você coloque um teste que nunca dê falso o `for` *NUNCA* sairá do *looping*.

Sabendo disso entendemos que o contador irá de 2 até < 4, fazendo o que?

```js
if(numero/contador === 0)
```

**ISSO MESMO!!!** Testando a divisão entre o `numero`(4) e o `contador` que terá um valor diferente a cada *loop*, sendo que esse valor inicia em 2 e vai sendo **incrementado em 1** por causa do terceiro parâmetro do `for`.

Então você percebeu que aquele `contador++` é o tal do incrementador né?

Ele simplesmente adiciona 1 ao valor do `contador` cada vez que passa.

Agora refatoramos o algoritmo para encapsular a lógica do número primo em uma função:

```js
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
```

## Testando o resto da divisão se é igual a0

Podemos resolver o mesmo problema com uma abordagem diferente, em vez de testar o resultado da divisão iremos testar se o resto dessa divisão é igual a 0.

Vamos reusar o algoritmo passado:

```js
// Definimos o estado atual
let primo = false;
const numero = 5;
// Não preciso testar se é divisível por 1 nem 2
for(let contador = 2; contador < numero; contador++) {
  // Preciso testar se o número tem algum divisor entre ele e 1
  // Se não achar nenhum divisor ele será PRIMO
  let resultado = numero/contador;
  if(isInteger(resultado) === false) {
    primo = true;
  }
  console.log('Contador: ', contador);
  console.log('Resultado: ', resultado);
  // Como definimos o estado inicial em FALSE
  // Só mudaremos ele se for PRIMO, porém usado a mesma variável
  console.log('O número '+numero+' é primo?', primo);
  return primo;
}
```

Como iremos trabalhar com o valor do **resto** da divisão precisamos inicialmente conhecer esse conceito.

**O que é esse resto?**

Para exemplificar melhor acompanhe aqui comigo:

```
4 / 2 = 2
```

A divisão de 4 por 2 resulta em 2 e tem 0 como resto, pois:

```
 4 |2
-4  2
 0
```

Vamos ver com um número ímpar:

```
 4 |3
-3  1.3
 10
 -9
  1
  ... é uma dízima periódica
```

Logo você percebe que se o número a ser dividido(4), o dividendo, pelo divisor(3) não encontrar um resultado inteiro você deverá adicionar uma casa decimal (colocando a vírgula), fazendo isso você deve multiplicar o **resto** por 10, pois adicionou a vírgula no resultado, e continuar a divisão normalmente.

Ótimo então já sabemos dividir (hehehe) agora vamos criar um algoritmo para verificar o resto de uma divisão:

```js
const divisor = 4;
const dividendo = 3

const calculateRest = (divisor, dividendo) => {
  const resultado = divisor/dividendo;
  console.log('resultado: ', resultado);
  return divisor - (dividendo * parseInt(resultado));
}
```

Porém como as linguagens de programação vieram para facilitar nossa vida nós não precisaremos utilizar a função acima para retornar o resto, utilizaremos o [operador de módulo](https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_m%C3%B3dulo) ou também conhecido como **mod**.

```js
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
```

Dessa vez nós reusamos as funções passadas `isInteger` e `isPrime`, criando a função `calculateRest` que irá retornar o valor do resto da divisão para testarmos se ele é diferente de 0, **pois se o resto for 0 o `numero` encontrou um divisor**.

Quero que você analise essa linha comigo:

```js
if(!calculateRest(numero, contador))
```

**Por que não estou testando se o resultado de `calculateRest(numero, contador)` é diferente de 0?**

Pense aqui comigo, o retorno da função `calculateRest` será um inteiro, caso seja 0 significa que o número achou seu divisor, logo não é primo, por isso retornamos `false`:

```js
for(let contador = 3; contador < numero; contador++) {
  if(!calculateRest(numero, contador)) {
    return false;
  }
}
```

Então como o valor 0 que significa `false` entrou no `if` onde só pode entrar caso o valor seja `true`, no JavaScript também usamos o valor `0` para `false` e o valor `1` (ou maiores que 0) para `true`.

**Agora que vem a malandragem da lógica!**

Para o valor `0` entrar no if nós precisamos inverter seu valor já para Booleano(`true` ou `false`). Confira executando isso no seu console:

```
!0
true
!1
false
```


