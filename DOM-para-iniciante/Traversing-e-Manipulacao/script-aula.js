//OUTERHTML, INNERHTML E INNERTEXT
//Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");
//console.log(h1.innerHTML);
//console.log(h1.innerText);

h1.outerHTML = "<h1>Novo Título</p>";

//TRASVERSING
//Como navegar pelo DOM, utilizando suas propriedades e métodos.
const lista = document.querySelector(".animais-lista");
/*
console.log(lista.parentElement); // pai
console.log(lista.parentElement.parentElement); // pai do pai
console.log(lista.previousElementSibling); // elemento acima
console.log(lista.nextElementSibling); // elemento abaixo

console.log(lista.children); // HTMLCollection com os filhos
console.log(lista.children[0]); // primeiro filho
console.log(lista.children[--lista.children.length]); // último filho

lista.querySelectorAll("li"); // todas as LI's
lista.querySelector("li:last-child"); // último filho
*/
//ELEMENT VS NODE
//Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
//Geralmente estamos atrás de um elemento e não de qualquer node em si.
/*
console.log(lista.previousElementSibling); // elemento acima
console.log(lista.previousSibling); // node acima

console.log(lista.firstChild); // primeiro node child
console.log(lista.childNodes); // todos os node child
*/

//MANIPULANDO ELEMENTOS
//É possível mover elementos no dom com métodos de Node.
const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

//animais.appendChild(titulo); // move titulo de contatos para o final de animais
//contato.insertBefore(animais, mapa); // inseri a parte toda de animais dentro de contatos e antes do mapa
//contato.removeChild(titulo); // remove titulo de contato
//contato.replaceChild(lista, titulo); // substitui titulo por lista

//NOVOS ELEMENTOS
//Podemos criar novos elementos com o método createElement()
const novoH1 = document.createElement("h1");
/*
novoH1.innerText = "Novo Título";
novoH1.classList.add("titulo");
mapa.appendChild(novoH1);
console.log(novoH1);*/

//CLONAR ELEMENTOS
//Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
//true sinaliza para incluir os filhos
const faq = document.querySelector(".faq");
const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add("azul");
faq.appendChild(cloneH1);
