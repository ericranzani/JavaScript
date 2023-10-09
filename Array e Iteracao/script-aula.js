//[].FOREACH()
//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).
//O método sempre retorna undefined
const carros = ["Ford", "Fiat", "Honda"];
carros.forEach(function (item, index, array) {
  //console.log(item.toUpperCase(), index, array);
});

// com Arrow Function
carros.forEach((item, index, array) => {
  //console.log(item.toUpperCase());
});

//ARROW FUNCTION
const li = document.querySelectorAll("li");

//adicionando a class ativa em cada li de forma simplificada, quando fizer não precisa das {}
li.forEach((i) => i.classList.add("ativa"));

li.forEach(function (item) {
  item.classList.add("ativa");
});

//MODIFICAR A ARRAY ORIGINAL
//O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.
//É melhor utilizarmos o map para isso
/*
carros.forEach((item, index, array) => {
  array[index] = "Carro " + item;
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']*/

//[].MAP()
//[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
const newCarros = carros.map((item) => {
  return "Carro " + item;
});

carros; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

//VALOR RETORNADO
//Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

//ARROW FUNCTION E [].MAP()
//Uma Arrow Function de linha única e sem chaves (bigodes) irá retornar o valor após a fat arrow =>.
const numeros = [2, 3, 4, 5, 12];
const numerosX2 = numeros.map((n) => n * 2);

numerosX2; // [4, 6, 8, 10, 24]

//[].MAP() VS [].FOREACH()
//Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.
const numerosX3 = numeros.map((n) => n * 3);

numerosX3; // [6, 9, 12, 15, 36];

//[].MAP() COM OBJETOS
//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.
//exemplo real
const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);
// [15, 10, 20, 25];

//modo 1
const puxarNomes1 = function (aula) {
  return aula.nome;
};

//modo com arrow function
const puxarNomes = (aula) => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

//[].REDUCE()
//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
//retorna o valor final da iteração
const aulas2 = [10, 25, 30];
const reduceAulas = aulas2.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item);
  return acumulador + item;
});
console.log(reduceAulas); //65 que é a soma de tudo

//REDUCE PASSO A PASSO 1
//O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.
/*
const aulas3 = [10, 25, 30];

// 1
aulas3.reduce((0, 10) => {
  return 0 + 10;
}, 0); // retorna 10

// 2
aulas3.reduce((10, 25) => {
  return 10 + 25;
}, 0); // retorna 35

// 3
aulas3.reduce((35, 30) => {
  return 35 + 30;
}, 0); // retorna 65
*/

//REDUCE PASSO A PASSO 2
//Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.
/*
// 1
aulas3.reduce((10, 25) => {
  return 10 + 25;
}) // retorna 35

// 2
aulas3.reduce((35, 30) => {
  return 35 + 30;
}) // retorna 65
*/

//MAIOR VALOR COM [].REDUCE()
const numeros2 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros2.reduce((anterior, atual) => {
  /*
  if(anterior > atual)
    return anterior
  else
    return atual
  */
  //ternário
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60

//PODEMOS RETORNAR OUTROS VALORES
const aulas3 = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const listaAulas = aulas3.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {}); // aqui esta sendo passado um objeto vazio
//{0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'}

//PASSO A PASSO REDUCE
//Passo a passo do método reduce criando um Objeto.
/*
// 1
aulas3.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
  {}[0] = 'HTML 1';
  return {0: 'HTML 1'};
}, {})

// 2
aulas3.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
  {0: 'HTML 1'}[1] = 'HTML 2';
  return {0: 'HTML 1', 1: 'HTML 2'};
}, {})

// 3
aulas3.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
  {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
}, {})

// 4
aulas3.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
  {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
}, {})

*/

//[].REDUCERIGHT()
//Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.
const frutas = ["Banana", "Pêra", "Uva"];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

//[].SOME()
//[].some(), se pelo menos um return da iteração for truthy, ele retorna true.
const temUva = frutas.some((fruta) => {
  return fruta === "Uva";
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros4 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros4.some(maiorQue100); // true

//[].EVERY()
//[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.
const frutas2 = ["Banana", "Pêra", "Uva", ""];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor false
const arraysCheias = frutas2.every((fruta) => {
  return fruta; // false
});

const numeros5 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every((x) => x > 3); // true
