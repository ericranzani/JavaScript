"use strict";
//deixa o js em modo estrito prevenindo alguns erros

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined

var carro2 = "Fusca";
function mostrarCarro() {
  var frase = `Meu carro é um ${carro2}`;
  console.log(frase);
}
mostrarCarro(); // Meu carro é um Fusca
console.log(carro2); // Fusca

if (true) {
  let mes = "Dezembro";
  //var mes = "Dezembro";
  console.log(mes);
}
//console.log(mes); // vai dar erro, pois o let manten a variavel no escopo

//demonstração de q as chaves cria um escopo de bloco
{
  var carro3 = "Fusca";
  const ano = 2018;
}
console.log(carro3); // Carro
//console.log(ano); // erro ano is not defined

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}

const mes = "Dezembro";
//mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor
const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};
data.dia = 29; // Funciona
//data = 'Janeiro'; // erro

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019
//let ano = 2020; // erro, redeclarou a variável
