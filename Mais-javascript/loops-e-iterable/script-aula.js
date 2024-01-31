/*PARÂMETROS
Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.
function perimetroForma(lado, totalLados) {
  return lado * totalLados;
}

perimetroForma(10, 4); // 40
perimetroForma(10); // NaN*/

/*PARÂMETRO PADRÃO (DEFAULT) ES5
Antes do ES6 a forma de definirmos um valor padrão para um parâmetro, era através de uma expressão.
function perimetroForma(lado, totalLados) {
  totalLados = totalLados || 4; // se não for definido, será igual à 4
  return lado * totalLados;
}

perimetroForma(10, 3); // 30
perimetroForma(10); // 40*/

/*PARÂMETRO PADRÃO (DEFAULT) ES6+
Com o ES6 é possível definirmos o valor de um parâmetro direto na declaração do mesmo, caso o argumento não seja passado no momento da execução.*/
function perimetroForma(lado, totalLados = 4) {
  const argArray = Array.from(arguments);
  argArray.forEach((arg) => {
    console.log(arg);
  }); //exemplos de ARGUMENTS
  return lado * totalLados;
}

perimetroForma(10, 5); // 50
perimetroForma(10); // 40

/*ARGUMENTS
A palavra chave arguments é um objeto Array-like criado dentro da função. Esse objeto contém os valores dos argumentos. exemplo no console.log acima*/

/*PARÂMETRO REST
É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmet*/
function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou.");
  });
}

anunciarGanhadores("Pedro", "Marta", "Maria");
//outro exemplo

function perimetroForma(lado, totalLados = 4, ...listaArgumentos) {
  console.log(listaArgumentos);
  return lado * totalLados;
}
// assim vai trazer o resultado do calculo e os parametros do 3 adiante vão pra lista de argumentos
perimetroForma(10, 5, 3, 2, "teste", "ae"); // 50

/*ÚNICO REST
Só é possível ter um único parâmetro rest e ele deve ser o último. como foi mostrado acima*/

/*REST VS ARGUMENTS
Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.*/
function anunciarGanhadores(premio, ...ganhadores) {
  console.log(ganhadores); //o rest funciona como um array podendo utilizar os metodos e so vai pegar depois dos parametros q estavam definidos
  console.log(arguments); // o arguments é um objeto e vai mostrar todos os itens passados

  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou um " + premio);
  });
}
//utilizando o spread também
const ganhadores = ["Pedro", "Marta", "Maria"];
anunciarGanhadores("Carro", ...ganhadores);

/*OPERADOR SPREAD
Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um. Já o rest é utilizado com um parâmetro*/
const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];

//juntandos as duas arrays com spread
const comidas = [...frutas, "Pizza", ...legumes];
console.log(comidas);

/*SPREAD ARGUMENT
O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.*/
const numeroMaximo = Math.max(4, 5, 20, 10, 30, 2, 33, 5); // 33

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread); //55

/*TRANSFORMAR EM ARRAY
É possível transformar itens iteráveis em uma array real com o spread.*/
const btns = document.querySelectorAll("button");
const btnsArray = [...btns];
console.log(btnsArray);
