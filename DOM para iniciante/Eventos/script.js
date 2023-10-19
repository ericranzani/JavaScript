// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInternos = document.querySelectorAll("a[href^='#']");

function handleLinkInterno(event) {
  event.preventDefault();
  linkInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linkInternos.forEach((link) => {
  link.addEventListener("click", handleLinkInterno);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");

function handleElementos(event) {
  console.log(event.currentTarget);
  //console.log(event);
  event.currentTarget.remove();
}
/*
todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElementos);
});*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleKeyboard(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleKeyboard);
