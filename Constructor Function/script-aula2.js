//EXEMPLO REAL
//Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.
/*
const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
    this.element().classList.add("ativar");
  },
};

Dom.ativar(); //aqui cria a classe na li
Dom.seletor = "ul"; // muda o seletor
Dom.ativar(); // adiciona a classe na ul tbm
*/

//CONSTRUCTOR FUNCTION REAL
//Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.
function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}

const li = new Dom("li");
const ul = new Dom("ul");
const LastLi = new Dom("li:last-child");
LastLi.ativar("teste-classe");
