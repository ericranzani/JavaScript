// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
  item.classList.add('ativo');
  //item.setAttribute('class', 'ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove('ativo');
});
menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgList = document.querySelectorAll('img');
imgList.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo);
});  

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="#https"]');
link.setAttribute('href', 'http://www.google.com/'); 
console.log(link.href)
