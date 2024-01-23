// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
//const cep = fetch("https://viacep.com.br/ws/${CEP}/json/");
const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin e reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector(".btc");

function fetchBit() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      btcDisplay.innerText = ("R$ " + btcJson.BRL.buy).replace(".", ",");
    });
}

//setInterval(fetchBit, 500);
fetchBit();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnPiada = document.querySelector(".btnPiada");
const resultadoPiada = document.querySelector(".piada");

btnPiada.addEventListener("click", buscaPiada);

function buscaPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((piada) => {
      resultadoPiada.innerText = piada.value;
    });
}
