function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "Abraçou";
  };
  this.andar = function () {
    // nesse caso, vai imprimir essa função pois está direta no objeto, caso não tivesse essa função aqui, utilizaria a função andar() do prototype
    return "Andou pelo objeto";
  };
}

Pessoa.prototype.andar = function () {
  return this.nome + " Pessoa andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " Pessoa nadou";
};

const eric = new Pessoa("Eric", 28);
//console.log(Pessoa.prototype);
//console.log(eric.prototype);

//HERANÇA DE PROTÓTIPO
//O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.
Object.prototype;
eric.toString();
eric.isPrototypeOf();
eric.valueOf();

//CONSTRUTORES NATIVOS
//Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
const pais = "Brasil";
const cidade = new String("São Paulo");

pais.charAt(0); // B
cidade.charAt(0); // S

String.prototype;

//É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
//É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.
//Existe o método Array.from()
const listaAnimais = ["Cachorro", "Gato", "Macaco", "Girafa", "Cavalo"];

const lista = document.querySelectorAll("li");

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

//MÉTODO DO OBJETO VS PROTÓTIPO
//Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.
//dado.constructor.name, retorna o nome do construtor;
const lista2 = Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

//ENTENDA O QUE ESTÁ SENDO RETORNADO
//Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // Object
Carro.marca; // String
Carro.preco; // Number
Carro.acelerar; // Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String
