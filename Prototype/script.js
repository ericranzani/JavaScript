// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function () {
  return `Nome completo é ${this.nome} ${this.sobrenome} e sua idade é de ${this.idade}`;
};

const eric = new Pessoas("Eric", "Ranzani", 28);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

//NodeList
Object.getOwnPropertyNames(NodeList.prototype);
//NodeList.entries();
//NodeList.forEach();
//NodeList.item();
//NodeList.values();

// HTMLCollection
Object.getOwnPropertyNames(HTMLCollection.prototype);
//item()
//length()
//namedItem()

//Document
Object.getOwnPropertyNames(Document.prototype);
//append()
//captureEvents() esse está ate como deprecated
//clear()
//close()

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
// é do tipo String
