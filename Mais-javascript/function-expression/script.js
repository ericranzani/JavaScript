// Remova o erro
//priceNumber("R$ 99,99") erro pois estava sendo chamada antes da expression ser criada
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99")); // 99.99

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
var instrumento = "Gaita";
(() => {
  const instrumento = "Baixo";
  console.log(instrumento);
})(); //Baixo

console.log(instrumento); //Gaita

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(function () {
  console.log("Assim ela está sendo ativada");
});
