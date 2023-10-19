console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades
console.log(window.innerHeight); // retorna a altura do browser

//window.alert("Seja bem vindo!");

const href = window.location.href;
console.log(href);
if (href === "http://127.0.0.1:5500/DOM/index.html") {
  console.log("É igual");
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

function callBackH1() {
  console.log("Clicou em", h1Selecionado.innerText);
}
h1Selecionado.addEventListener("click", callBackH1);
