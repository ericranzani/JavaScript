// Crie uma função para verificar se um valor é Truthy
function isTrue(valor) {
  return !!valor;
}
console.log(isTrue(2));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado * 4;
}
console.log(perimetro(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  `Seu nome completo é ${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Eric", "Ranzani"));

// Crie uma função que verifica se um número é par
function isPar(numero) {
  if (numero % 2 === 0) {
    return "Número é par";
  } else {
    return "Número é ímpar";
  }
  return numero;
}
console.log(isPar(2));
console.log(isPar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDados(dados) {
  console.log(typeof dados);
}
tipoDeDados(2);
tipoDeDados("2");
tipoDeDados();

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("wheel", function () {
  console.log("Eric Ranzani");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  //var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
