/*HTTP
Hypertext Transfer Protocol é o protocolo utilizando para enviarmos/recebermos arquivos e dados na Web.*/
fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((r) => r.json())
  .then((pokemon) => {
    //console.log(pokemon);
  });

/*URL E METHOD
Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.*/
const url = "https://jsonplaceholder.typicode.com/posts/";
const options = {
  method: "POST",
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => console.log(json));

/*GET
GET irá puxar as informações da URL. Não é necessário informar que o método é GET, pois este é o padrão.

const url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url, {
  method: 'GET'
})
.then(r => r.json())
.then(r => console.log(r))
*/

/*POST
POST irá criar uma nova postagem, utilizando o tipo de conteúdo especificado no headers e utilizando o conteúdo do body.

const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))
*/

/*PUT
PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body.
const url = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))
*/

/*HEAD
HEAD puxa apenas os headers. É uma requisição mais leve pois não puxa o body.
const url = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});
*/

/*CORS
Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferente origens.

É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.

Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve para dar certa proteção ao browser, mas não é inviolável.
const url2 = "https://cors-anywhere.herokuapp.com/https://www.google.com/";
const div = document.createElement("div");

fetch(url2)
  .then((r) => r.text())
  .then((r) => {
    div.innerHTML = r;
    console.log(div);
  });*/
