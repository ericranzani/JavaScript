// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Eric",
  sobrenome: "Ranzani",
  idade: 28,
  cabelo: "ondulado",
  cidade: "São Bernardo do Campo",
  usaOculos: true,
  /* um dos modos
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },*/
};
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raça: "Labrador",
  idade: 10,
  cor: " #000",
  peso: "35kg",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Só olha";
    }
  },
};
