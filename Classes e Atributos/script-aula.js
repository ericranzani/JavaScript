const menu = document.querySelector('.menu');
// classList Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém
menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');


const animais = document.querySelector('.animais');
console.log(animais.attributes["data-texto"]);

//mais usado
const img = document.querySelector('img');
console.log(img.getAttribute('src')); // valor do src
console.log(img.setAttribute('alt', 'Raposa')); // muda o alt
console.log(img.hasAttribute('id')); // true / false
console.log(img.removeAttribute('alt')); // remove o alt
console.log(img.hasAttributes()); // true / false se tem algum atributo



