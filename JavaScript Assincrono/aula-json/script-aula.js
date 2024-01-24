/*JSON
JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.
{
  "id": 1,
  "nome": "Eric",
  "email": "eric@testando.com"
}*/

/*VALORES
Os valores podem ser números, strings, boolean, arrays, objetos e null.
{
  "id": 1,
  "faculdade": true,
  "pertences": [
    "lapis",
    "caneta",
    "caderno"
  ],
  "endereco": {
    "cidade": "Rio de Janeiro",
    "pais": "Brasil"
  },
  "casado": null
}
*/

/*ARRAYS E OBJETOS
É comum possuirmos array's com objetos em cada valor da array. Cuidado para não colocar vírgula no último item do objeto ou array.
[
  {
    id: 1,
    aula: 'JavaScript',
    tempo: '25min',
  },
  {
    id: 2,
    aula: 'HTML',
    tempo: '15min',
  },
  {
    id: 3,
    aula: 'CSS',
    tempo: '10min',
  },
];
*/

fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => {
    json.forEach((materia) => {
      //console.log(materia.aula);
    });
  });

/*JSON.PARSE() E JSON.STRINGIFY()
JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.*/
fetch("./dados.json")
  .then((r) => r.text())
  .then((jsonText) => {
    const jsonFinal = JSON.parse(jsonText);
    //console.log(jsonFinal);
  });

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

const stringConfig = JSON.stringify(configuracoes);
//console.log(stringConfig);

/*EXEMPLO REAL
Podemos guardar por exemplo no localStorage, uma string como valor de uma propriedade. E retornar essa string como um objeto.*/
localStorage.config = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config));
