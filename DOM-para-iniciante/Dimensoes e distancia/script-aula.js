const listAnimais = document.querySelector('.animais-lista');
//o mesmo vale para width no lugar do height
//console.log(listAnimais.clientHeight); // height + padding
//console.log(listAnimais.offsetHeight); // height + padding + border
//console.log(listAnimais.scrollHeight); // height total, mesmo dentro de scroll


// Distância entre o topo do elemento e o topo da página
console.log(listAnimais.offsetTop);

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
console.log(listAnimais.offsetLeft);

//GETBOUNDINGCLIENTRECT()
//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const primeiroH2 = document.querySelector('h2');

const rect = primeiroH2.getBoundingClientRect();
//console.log(rect)
console.log(rect.height); // height do elemento
console.log(rect.width); // width do elemento
console.log(rect.top); // distância entre o topo do elemento e o scroll

console.log(
  window.innerWidth, // width do janela
  window.outerWidth, // soma dev tools também
  window.innerHeight, // height do janela
  window.outerHeight, // soma a barra de endereço
  window.pageYOffset, // distância total do scroll vertical
  window.pageXOffset // distância total do scroll horizontal
);

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
};


//MATCHMEDIA();
//Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)').matches;
if(small) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

