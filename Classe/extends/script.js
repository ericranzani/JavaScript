/*SUBCLASSES
É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  acelerar() {
    console.log("Acelerou muito");
  }
  empinar() {
    console.log("Moto Empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2);
const civic = new Veiculo(4);*/

/*MÉTODOS
Podemos escrever por cima de um método herdado. exemplo com acelerar acima*/

/*SUPER
É possível utilizar a palavra chave super para falarmos com a classe que pai e acessarmos os seus métodos e propriedades.*/
class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log("Acelerou muito");
  }
  empinar() {
    console.log("Moto Empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2, "gasolina", true);
const civic = new Veiculo(4);

/*SUPER E CONSTRUCTOR
Podemos utilizar o super para estendermos o método constructor. Sempre tem que utilizar o super com o construtor nesses casos*/
