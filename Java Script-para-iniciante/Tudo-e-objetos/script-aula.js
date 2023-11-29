var nome = "Eric";
var nomeMinusculo = nome.toLocaleLowerCase();
console.log(nome);

var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2'

function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"
areaQuadrado.length; // 1



var btn = document.querySelector(".btn");
btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});
