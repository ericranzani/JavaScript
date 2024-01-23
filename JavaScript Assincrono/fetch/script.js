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
    //console.log(cep);
    //console.log(cep.bairro, cep.logradouro);
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
    //console.log(titulo);
  });

/*.BLOB()
Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.*/
const imagem = fetch("./imagem.png");

imagem
  .then((r) => r.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobUrl;
  });

/*.CLONE()
Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.
cep.then((r) => {
  const r2 = r.clone();
  r.text().then((text) => {
    console.log(text);
  });
  r2.json().then((json) => {
    console.log(json);
  });
});*/

/*.HEADERS
É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.
cep.then((r) => {
  console.log(r);
  r.headers.forEach(console.log);
});*/

/*.STATUS E .OK
Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.*/
cep.then((r) => {
  console.log(r.status);
  if (r.status === 404) {
    console.log("página não existe");
  }
});

/*.URL E .TYPE
.url retorna o url da requisição. .type retorna o tipo da reposta.
cors = rerquisição fora do servidor que é permitida*/
cep.then((r) => {
  console.log(r.url, r.type);
});
