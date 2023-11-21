// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");

const totalCaracter = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(totalCaracter); //655
console.log(paragrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;

  return elemento;
}
console.log(criarElemento("ul", "ativo", "Esse é o conteudo"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, "h1", "titulo");
const cursoJS = h1Titulo("Curso de JavaScript");
const cursoHTML = h1Titulo("Curso de HTML");

console.log(h1Titulo("Curso de React"));
console.log(cursoJS, cursoHTML);
