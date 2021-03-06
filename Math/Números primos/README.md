# Algoritmo - Números primos

##Definição

A definição de um número primo é:

>  Número primo, é um número p cujo conjunto dos divisores não inversíveis não é vazio, e todos os seus elementos são produtos de p por números inteiros inversíveis. De acordo com esta definição, 0, 1 e -1 não são números primos.

fonte: [https://pt.wikipedia.org/wiki/N%C3%BAmero_primo](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)

Mas o que isso significa?

Significa que para um número inteiro ser primo, ele só pode ser divisível:

- por 1;
- por ele mesmo.

Sabendo disso o que você consegue deduzir sobre o número primo?

![](https://media.giphy.com/media/FwmBBOop7p1mw/giphy.gif)

**Se ele só é divisível por 1 e por ele mesmo, logo ele não tem nenhum outro divisor inteiro.**

Vamos então ver os números primos de 1 até 7:

```
1 / 1 = 1

2 / 1 = 2
2 / 2 = 1

3 / 1 = 3
3 / 2 = 1.5
3 / 3 = 1

4 / 1 = 4
4 / 2 = 2
4 / 3 = 1.333
4 / 4 = 1

5 / 1 = 5
5 / 2 = 2.5
5 / 3 = 1.666
5 / 4 = 1.25
5 / 5 = 1

6 / 1 = 6
6 / 2 = 3
6 / 3 = 2
6 / 4 = 1.5
6 / 5 = 1.2
6 / 6 = 1

7 / 1 = 7
7 / 2 = 3.5
7 / 3 = 2.333
7 / 4 = 1.75
7 / 5 = 1.4
7 / 6 = 1.166
7 / 7 = 1
```

Baseando-se nos dados acima, quais são os números primos de 1 a 7?

> 2,3,5,7

**Entendeu o que teremos que testar para verificar se um número é primo???**

![](https://media.giphy.com/media/xf20D8HzvTQzu/giphy.gif)

Primeiramente escrevemos as regras explícitas, não precisamos testar se o número é divisível por 1, mas precisamos testar se o número **tem algum divisor entre ele e 1**.

Para fazer iremos utilizar a mesma lógica da função `multiplicar/dividir` do [Curso de Matemática para Programadores](https://github.com/Webschool-io/matematica-para-programadores).

Sabemos então que não precisaos dividir por `1`, mas pecisamos dividir por `2` e esse este será o primeiro do nosso algritmo, pois tamb

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

Nesse caso precisamos verificar se o resultado da divisão será um inteiro, pois se ele for nós encontramos um divisor.

**Mas como assim?**

Simples, divida `4` por `2`.

O resultado é `2`, ou seja, um inteiro.

Agora divida `4` por `3`.

O resultado é `1.33333`, ou seja, não inteiro.

Para facilitar nossa vida o JavaScript nos provê a função `Number.isInteger()` que irá fazer teste automaticamente:

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
// Não preciso testar se é divisível por 1
for(let contador = 2; contador < numero; contador++) {
  // Preciso testar se o número tem algum divisor entre ele e 2
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

## Testando o resto da divisão se é igual a 0

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

Porém como as linguagens de programação vieram para facilitar nossa vida nós não precisaremos utilizar a função acima para retornar o resto, utilizaremos o [operador de módulo](https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_m%C3%B3dulo) ou também conhecido como **mod**, [no JavaScript usamos o operador %]().

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

E pronto!

## Desafio

**Agora o seu desafio é inverter a lógica!**

Em vez de iniciar do 3 você deverá iniciar do valor passado a ser testado, ou seja, em vez de incrementar você irá decrementar.

**E também deverá criar um algoritmo para retornar `true` ou `false` caso um número seja Inteiro, utilizando-o em vez da função parseInt().**

## Dividindo por √¯n

Caso não esteja familiarizado com o algoritmo da radiciação [leia mais nesse meu conteúdo](https://github.com/Webschool-io/matematica-para-programadores#radiciação-1), nele eu deduzi uma fórmula "simples" para números inteiros positivos:

```
√¯y = x

y/x = x
```

Ela pode ser provada da seguinte forma:

```
√¯49 = x
49 = x ^ 2
49 = x . x
49/x = x
49/7 = 7
```

Nesse caso sabemos que qualquer número divido pela sua raíz quadrada será a própria raíz, ou seja, qualquer número pode ser escrito como a multiplicação de dois números.

Sabendo disso podemos inferir que um número `x` pode ser escrito como uma multiplicação de 2 números inteiros e positivos menores que ele, sendo a multiplicação da sua raíz por ela mesma o maior valor.

Agora podemos melhorar nosso algoritmo não precisando dividir por todos seus antecessores, bastando iniciar da raíz do número até 2.

Veja o que mudaremos dentro da função `isPrime`:

```js
const isPrime = (numero) => {

  if(isInteger(numero/2)) {
    return false;
  }

  const raiz = Math.sqrt(numero);

  if(raiz > 2) {
    for(let contador = 3; contador < raiz; contador++) {
      if(!calculateRest(numero, contador)) {
        return false;
      }
    }
    return true;
  }
}
```

Logo após o teste pra verificar se é par em `if(isInteger(numero/2))` adicionei o cálculo da raíz quarada utilizando a função `Math.sqrt(numero)`.

Para na sequência testar se a `raiz` é maior que `2` para garantir que não entrarei nesse `if` caso o `numero` seja menor que 4, que é par.

Depois bastou modificar o teste de saída do `for` para `contador < raiz`, poupando-nos **muito processamento**.

Apenas observe nosso algoritmo antes:

```
37 / 2 =  18.5
O número 18.5 é inteiro? false
37/3 12.333333333333334
37/4 9.25
37/5 7.4
37/6 6.166666666666667
37/7 5.285714285714286
37/8 4.625
37/9 4.111111111111111
37/10 3.7
37/11 3.3636363636363638
37/12 3.0833333333333335
37/13 2.8461538461538463
37/14 2.642857142857143
37/15 2.466666666666667
37/16 2.3125
37/17 2.176470588235294
37/18 2.0555555555555554
37/19 1.9473684210526316
37/20 1.85
37/21 1.7619047619047619
37/22 1.6818181818181819
37/23 1.608695652173913
37/24 1.5416666666666667
37/25 1.48
37/26 1.4230769230769231
37/27 1.3703703703703705
37/28 1.3214285714285714
37/29 1.2758620689655173
37/30 1.2333333333333334
37/31 1.1935483870967742
37/32 1.15625
37/33 1.121212121212121
37/34 1.088235294117647
37/35 1.0571428571428572
37/36 1.0277777777777777
O número 37 é primo? true
```

E agora com o algoritmo otimizado:

```
37 / 2 =  18.5
O número 18.5 é inteiro? false
37/3 12.333333333333334
37/4 9.25
37/5 7.4
37/6 6.166666666666667
O número 37 é primo? true
```

**Saímos de 37 operações para apenas 7!** E claro que esse número pode aumentar **MUITO!!!**



