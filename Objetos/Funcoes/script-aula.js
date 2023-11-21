const perimetro = new Function("lado", "return lado * 4");

function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2 traz a quantidade de parâmetros
somar.name; // 'somar'

//FUNCTION.CALL()
//function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

function darOi(nome) {
  console.log(`Oi para você ${nome}`);
}

darOi.call({}, "Eric");

//outro exemplo
const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018

//THIS
//O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().
const carros = ["Ford", "Fiat", "VW"];
const frutas = ["Banana", "Uva", "Pêra"];

carros.forEach.call(frutas, (item) => {
  console.log(item);
});

//EXEMPLO REAL
//O objeto atribuído a lista será o substituído pelo primeiro argumento de call()
function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};

const li = {
  element: document.querySelector("li"),
};

Dom.prototype.ativo.call(li, "ativar");
//construtor, prototype, tipode metodo, call/apply/bind

//const lista = new Dom("ul");
//lista.ativo.call(li, "ativar");
//lista.ativo("ativar");

//exemplo com array
//Modificar construtor principal não é boa prática, foi so de exemplo
//É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).
Array.prototype.mostrarThis = function () {
  console.log(this);
};
//frutas.mostrarThis()

//ARRAY-LIKE
//HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.
const li2 = document.querySelectorAll("li");
const filtro = Array.prototype.filter.call(li2, (item) => {
  return item.classList.contains("ativo");
});
console.log(filtro);
