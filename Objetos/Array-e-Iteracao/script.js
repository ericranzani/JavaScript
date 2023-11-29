// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso"); //pegando todos cursos
const arrayCursos = Array.from(cursos); //tranformando em array

const objetoCuros = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const desc = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao: desc,
    aulas,
    horas,
  };
});
console.log(objetoCuros);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numeros.filter((n) => n > 100);
console.log(maior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const temBaixo = instrumentos.some((instrumento) => instrumento === "Baixo");
console.log(temBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
let somaPreco = 0;

// opção feito com .reduce
const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$", "").trim().replace(",", ".");
  return acumulador + precoLimpo;
}, 0);

// opção feito com .map
const arrayListPreco = compras.map((item) => {
  valor = +item.preco.replace("R$", "").trim().replace(",", ".");
  somaPreco += valor;
  return somaPreco;
});

console.log(valorTotal);
console.log(somaPreco.toFixed(2));
