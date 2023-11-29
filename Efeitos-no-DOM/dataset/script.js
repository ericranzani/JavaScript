let div = document.querySelector("[data-cor]");

//adicionando
div.dataset.height = 1000;

//deletando
delete div.dataset.width;

//adicionando com nome composto
div.dataset.totalHeigth = 3000; //no DOM fica data-total-heigth='3000'

console.log(div.dataset);
