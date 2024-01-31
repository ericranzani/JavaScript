// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = btnStyles;
// console.log(btnStyles.backgroundColor);
// console.log(btnStyles.color);
// console.log(btnStyles.margin);
console.log(backgroundColor, color, margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo); //HTML
console.log(cursoInativo); //JavaScript

// Corrija o erro abaixo
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};

//erro de sintaxe, pois primeiro vem o nome da variavel real e depois dos : um novo nome para esse dado
const { bobCor: cor } = cachorro; // undefined
const { cor: bobCor } = cachorro; // amarelo
console.log(bobCor);
