/*GET E SET
Podemos definir comportamentos diferentes de get e set para um método.*/
const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(numero) {
    this._numero = numero * 200;
  },
};

button.element = "button"; // set
button.element; // get (<button></button>);

/*VALOR ESTÁTICO
Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos.*/
const matematica = {
  get PI() {
    return 3.14;
  },
};

matematica.PI; // get (3.14)
matematica.PI = 20; // nada acontece

/*SET
Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto.*/
const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = "Maçã";
frutas.nova = "Morango";

/*CLASS
Assim como em um objeto, as classes podem ter métodos de get e set também.*/
class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const grenButton = new Button("Clique Aqui!", "green");

/*SET E CLASS
Com o set podemos modificar apenas parte do elemento de get. É comum definirmos variáveis privadas, utilizando o underscore _privada. Exemplo acima*/
