const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]);

/*
Exemplo do doc
const animais2 = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');
*/

const primeiroLi = document.querySelector('li');
console.log(primeiroLi);

const primeiroUl = document.querySelector('ul');
console.log(primeiroUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);


/*
Exemplo do doc
const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection[1]);
*/

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[2]);


const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiroUl.classList.add('grid-section');

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);


gridSectionNode.forEach(function(item, index){
    console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);
arrayGrid.pop();
console.log(arrayGrid);

arrayGrid.forEach(function(item){
    console.log(item)
})
