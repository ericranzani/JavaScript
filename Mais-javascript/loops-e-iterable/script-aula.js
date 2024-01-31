/*ITERABLE
São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros.*/
const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
  console.log(headers)
);

/*FOR...OF
É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.*/
for (const fruta of frutas) {
  //console.log(fruta);
}

for (const char of frase) {
  //console.log(char);
}

/*SPREAD E FOR...OF
Com o for loop podemos manipular cada um dos elementos do objeto iterável.*/
const btns = document.querySelectorAll("button");

for (const btn of btns) {
  btn.style.color = "red";
}
console.log(...btns);

/*APENAS ITERÁVEIS
O for...of não irá funcionar em um objeto comum que não seja iterável.*/
const carro = {
  marca: "Honda",
  ano: 2018,
};

/* for (const chave of carro) {
  //console.log(chave); Uncaught TypeError: carro is not iterable
 }*/

/*FOR...IN
Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.*/
for (const key in carro) {
  console.log(key, carro[key]);
}

/*ARRAYS E FOR...IN
Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.*/
for (const index in frutas) {
  console.log(index); // 0, 1, 2
}

for (const index in frutas) {
  console.log(frutas[index]); //Banana, Morango, Uva
}

/*CHAVE E VALOR
Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.*/
const btnUnico = document.querySelector("button");
const btnStyles = getComputedStyle(btnUnico);

for (const style in btnStyles) {
  //console.log(`${style}: ${btnStyles[style]}`);
}

/*DO / WHILE
Outro tipo de loop é o Do / While. Não é muito utilizado.*/
let i = 0;
do {
  console.log(i++);
} while (i <= 5);
