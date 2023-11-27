//OBJECT
//Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.
const carro = {
  marca: "Ferrari",
  ano: 2018,
};

//existe essas duas formas de criar objetos
const pessoa = new Object({
  nome: "Eric",
  idade: 28,
});

//MÉTODOS DE OBJECT
//Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
const carro2 = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro2).init("Honda");
//honda.init("Honda").acelerar();
console.log(honda.buzinar());

//OBJECT.ASSIGN()
//Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.
const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

//modifica adicionando acelerar e buzinar dentro do objeto e não no prototipo
Object.assign(moto, funcaoAutomovel);

//OBJECT.DEFINEPROPERTIES()
//Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
const moto2 = {};
Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
});

moto2.rodas = 4; //não vai haver a alteração
delete moto2.capacete;
moto2;
// {rodas: 2}

//GET E SET
//É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
const moto3 = {};
Object.defineProperties(moto3, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = "Velocidade " + valor;
    },
  },
});

moto3.velocidade = 200;
moto3.velocidade;
// Velocidade 200

//OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
//Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight");
// Puxa de uma única propriedade

//OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
//Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro3 = {
  marca: "Ford",
  ano: 2018,
};
Object.keys(carro3);
// ['marca', 'ano']
Object.values(carro3);
// ['Ford', 2018]
Object.entries(carro3);
// [['marca', 'Ford'], ['ano', 2018]]

//OBJECT.GETOWNPROPERTYNAMES(OBJ)
//Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

Object.getOwnPropertyNames(carro3);
// ['marca', 'ano']

//OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
//Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
const frutas = ["Banana", "Pêra"];
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(""); // String

const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];
const novaFruta = frutas1;

Object.is(frutas1, frutas2); // false
Object.is(frutas1, novaFruta); // true

//OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
//Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades, mas pode ser deletedas.
const carro4 = {
  marca: "Ford",
  ano: 2018,
};
Object.freeze(carro4);
Object.seal(carro4);
Object.preventExtensions(carro4);

Object.isFrozen(carro4); // true
Object.isSealed(carro4); // true
Object.isExtensible(carro4); // false

//PROPRIEDADES E MÉTODOS DO PROTÓTIPO
//Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.
const frutas3 = ["Banana", "Uva"];
frutas.constructor; // Array

const frase = "Isso é uma String";
frase.constructor; // String

//{}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
//Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
frutas3.hasOwnProperty("map"); // false
Array.hasOwnProperty("map"); // false
Array.prototype.hasOwnProperty("map"); // true

Array.prototype.propertyIsEnumerable("map"); // false
window.propertyIsEnumerable("innerHeight"); // true

//{}.ISPROTOTYPEOF(VALOR)
//Verifica se é o protótipo do valor passado.
Array.prototype.isPrototypeOf(frutas3); // true

//{}.TOSTRING()
//Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
const frutas4 = ["Banana", "Uva"];
frutas4.toString(); // 'Banana,Uva'
typeof frutas4; // object
Object.prototype.toString.call(frutas4); // [object Array]

const frase2 = "Uma String";
frase2.toString(); // 'Uma String'
typeof frase2; // string
Object.prototype.toString.call(frase2); // [object String]

const carro5 = { marca: "Ford" };
carro5.toString(); // [object Object]
typeof carro5; // object
Object.prototype.toString.call(carro5); // [object Object]

const li = document.querySelectorAll("li");
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
