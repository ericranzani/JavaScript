/*FUNCTION EXPRESSION
É criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.*/
const somar = function (a, b) {
  return a + b;
};

/*HOISTING
Function Declarations são completamente definidas no momento do hoisting, já function expressions apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma FE possui importância.*/
somar2(4, 2); // 6
//dividir(4, 2);  Erro

function somar2(a, b) {
  return a + b;
}
const dividir = function (a, b) {
  return a / b;
};

/*ARROW FUNCTION
Podemos criar utilizando arrow functions. Não recomendado pois pode dificultar a leitura do código*/
const somar3 = (a, b) => a + b;
somar3(4, 2); // 6

const quadrado = (a) => a * a;
quadrado(4); // 16

/*ESTRUTURA / PREFERÊNCIA
Geralmente o uso entre expression / declaration é uma questão de preferência. Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.*/

/*IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's. O objetivo da IIFE é só de isolar o escopo.
Compiladores ainda transformam modules em IIFE's para manter a compatibilidade com browsers antigos.*/
const instrumento = "Violão";

// código isolado do escopo global
(() => {
  const instrumento = "Guitarra";
  console.log(instrumento);
})(); //Guitarra
console.log(instrumento); //violão
