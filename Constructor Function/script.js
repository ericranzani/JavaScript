// Transforme o objeto abaixo em uma Constructor Function
function pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new pessoa("João", 20);
const maria = new pessoa("Maria", 25);
const bruno = new pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  const elements = document.querySelectorAll(seletor);

  this.addClass = (classe) => {
    elements.forEach((element) => {
      element.classList.add(classe);
    });
  };

  this.removeClass = (classe) => {
    elements.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const listLi = new Dom("li");
const listUl = new Dom("ul");
listLi.addClass("teste");
listLi.removeClass("teste");

listUl.addClass("ativar");
