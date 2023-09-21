const img = document.querySelectorAll('img');

img.forEach(function(item, index, array){
   // console.log(item, index, array)
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  //console.log(item);
});

//Arrow function
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  //console.log(item);
});


const imgs2 = document.querySelectorAll('img');
// parâmetro único não precisa de parênteses
imgs2.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs2.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs2.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));
