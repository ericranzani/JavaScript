/*FETCH API
Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

SERVIDOR LOCAL
O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar.*/
const doc = fetch("./doc.txt");
/*
doc
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body;
  });*/

//retorno direto
doc
  .then((r) => r.text())
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body;
  });

/*RESPONSE
O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises. Exemplo feito acima*/

/*.JSON()
Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.*/
const cep = fetch("https://viacep.com.br/ws/09820480/json/");
cep
  .then((r) => r.json())
  .then((cep) => {
    console.log(cep);
    console.log(cep.bairro, cep.logradouro);
    const conteudo2 = document.querySelector(".conteudo-cep");
    conteudo2.innerText = cep.logradouro;
  });

/*.TEXT()
Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.
const estilo = fetch("./style.css");
estilo
  .then((r) => r.text())
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    const style = document.createElement("style");
    style.innerHTML = body;
    conteudo.appendChild(style);
  });*/

/*HTML E .TEXT()
Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.*/
const sobre = fetch("./sobre.html");

const div = document.createElement("div");

sobre
  .then((r) => r.text())
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
    console.log(titulo);
  });
