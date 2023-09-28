//CONSTRUCTOR FUNCTIONS
//Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.
//Usar Pascal Case, ou seja, começar com letra maiúscula.
function Carro(marcaAtributo, precoAtributo) {
  this.marca = marcaAtributo;
  this.preco = precoAtributo;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 2000);

//NEW KEYWORD
//A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.
/*
// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}*/

//THIS KEYWORD
//O this faz referência ao próprio objeto construído com a Constructor Function.
function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoInicial;
  console.log(this);
}

const mazda = new Carro2("Mazda", 5000);
