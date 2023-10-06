//ARRAYS
//Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.
const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]("Ford");
dados[1][2].cor; // azul

//CONSTRUÇÃO DE ARRAYS
//Toda array herda os métodos e propriedades do protótipo do construtor Array.
//Os valores dos array's não são estáticos
const carros = new Array("Corola", "Mustang", "Honda");

carros[1]; // Mustang
carros[2] = "Ferrari";
carros[10] = "Parati"; // cria uma array com 10 item, porem com espaços vazios pra chegar ate o indice 10
carros.length; // 11

//ARRAY.FROM()
//Array.from() é um método utilizado para transformar array-like objects, em uma array.
let li = document.querySelectorAll("li"); // NodeList
li = Array.from(li); // Array

const carros2 = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4, //precisa da propriedade lenght
};

const carrosArray = Array.from(carros2);
console.log(carrosArray);

//ARRAY.ISARRAY()
//Verifica se o valor passado é uma array e retorna um valor booleano.
Array.isArray(li); // false

li = Array.from(li); // Array
Array.isArray(li); // true

//ARRAY.OF(), ARRAY() E NEW ARRAY()
//A palavra chave new não é necessária para utilizar o construtor Array.
Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

//PROPRIEDADES E MÉTODOS DO PROTOTYPE
//[].length retorna o tamanho da array.
const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
frutas.length; // 3

console.log(frutas[0].length); // 6
console.log(frutas[1].length); // 4
console.log(frutas[2].length); // 2

//MÉTODOS MODIFICADORES [].SORT()
//Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.
instrumentos.sort();
console.log(instrumentos); // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
console.log(idades); // [1, 12, 21, 32, 33, 43, 8]

//[].UNSHIFT() E [].PUSH()
//[].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.
const carros3 = ["Ford", "Fiat", "VW"];
carros3.unshift("Honda", "Kia"); // 5
console.log(carros3); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros3.push("Ferrari"); // 6
console.log(carros3); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

//[].SHIFT() E [].POP()
//[].shift() remove o primeiro elemento da array e retorna o mesmo. //[].pop() remove o último elemento da array e retorna o mesmo.
const primeiroCarro = carros3.shift(); // 'Ford'
console.log(carros3); // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda'
console.log(carros3); // ['Fiat', 'VW'];

//[].REVERSE()
//[].reverse() inverte os itens da array e retorna a nova array.
carros3.reverse(); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

//[].SPLICE()
//[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
const carros5 = ["Ford", "Fiat", "VW", "Honda"];
carros5.splice(1, 0, "Kia", "Mustang"); // []
carros5; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros5.splice(3, 2, "Ferrari"); // ['Fiat', 'VW']
carros5; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

//[].COPYWITHIN()
//[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.
["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

//[].FILL()
//[].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.
["Item1", "Item2", "Item3", "Item4"].fill("Banana");
// ['Banana', 'Banana', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

//MÉTODOS DE ACESSO [].CONCAT()
//Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.
const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, "Van");
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

//[].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
//[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.
const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5

//[].JOIN()
//[].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
linguagens.join(); // 'html,css,js,php,python'
linguagens.join(" "); // 'html css js php python'
linguagens.join("-_-"); // 'html-_-css-_-js-_-php-_-python'

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1");
// <h1>Título Principal</h1>

//[].SLICE()
//[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
