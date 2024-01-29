/*CONSTRUCTOR FUNCTION
Funções responsáveis pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes.
function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
};

const blueButton = new Button("comprar", "blue");
console.log(blueButton.element());*/

/*CLASS
O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos continua utilizado o sistema de protótipos de uma função construtora para criar a classe.
class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
}

const blueButton = new Button("comprar", "blue", "white");
console.log(blueButton.appendTo("body"));*/

/*CLASS VS CONSTRUCTOR FUNCTION
class Button {
  constructor(propriedade) {
    this.propriedade = propriedade;
  }
  metodo1() {}
  metodo2() {}
}

function Button(propriedade) {
  this.propriedade = propriedade;
}
Button.prototype.metodo1 = function() {}
Button.prototype.metodo1 = function() {}
*/

/*CONSTRUCTOR
O método constructor(args) {} é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.*/

/*CONSTRUCTOR RETURN
Por padrão a classe retorna this. Ou seja, this é o objeto criado com o new Class. Podemos modificar isso alterando o return do constructor, o problema é que perderá toda a referência do objeto.*/

/*THIS
Assim como em uma função construtora, this faz referência ao objeto criado com new. Você pode acessar as propriedades e métodos da classe utilizando o this. O exemplo esta acima que foi utilizando o metodo appendTo*/

/*PROPRIEDADES
Podemos passar qualquer valor dentro de uma propriedade.
class Button {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

const blueButton = new Button({
  backgroundColor: "blue",
  text: "Comprar",
  color: "white",
});

const blueButtonStatic = Button.createButton("Clique", "red");
console.log(blueButtonStatic);*/

/*STATIC VS PROTOTYPE
Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave static. Assim como [].map() é um método de uma array e Array.from() é um método do construtor Array. Exemplo esta acima */

/*STATIC
Você pode utilizar um método static para retornar a própria classe com propriedades já pré definidas.*/
class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, "blue", "white");
  }
}

const botaoAzul = Button.blueButton("Comprar");
