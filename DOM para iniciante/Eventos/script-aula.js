const img = document.querySelector("img");

/*function callBack() {
  console.log("clicou");
}

img.addEventListener("click", callBack);*/

//EVENT
//O primeiro parâmetro do callback é referente ao evento que ocorreu.
/*
function callback(event) {
  console.log(event);
}

img.addEventListener("click", callback);*/

//PROPRIEDADES DO EVENT
const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener("click", executarCallback);

//EVENT.PREVENTDEFAULT()
//Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.
const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(this.getAttribute("href"));
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", handleLinkExterno);

//THIS
//A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

//DIFERENTES EVENTOS
//Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.
const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}

//h1.addEventListener("click", handleEvent);
//h1.addEventListener("mouseenter", handleEvent);
//window.addEventListener("scroll", handleEvent);
//window.addEventListener("resize", handleEvent);
//window.addEventListener("keydown", handleEvent);

//KEYBOARD
//Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("fullscreen");
  } else if (event.key === "a") {
    document.body.classList.toggle("azul");
  }
}

window.addEventListener("keydown", handleKeyboard);

//FOREACH E EVENTOS
//O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.target.getAttribute("src"));
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
