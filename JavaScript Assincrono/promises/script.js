/*NEW PROMISE()
Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve();
  } else {
    reject();
  }
});

console.log(promessa); // Promise {<resolved>: undefined}
*/

/*RESOLVE()
Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.

REJECT()
Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.
const promesa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    resolve({ nome: "Eric", idade: 28 });
  } else {
    reject(Error("Um erro ocorreu"));
  }
});*/

/*THEN()
O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.*/

//promesa.then((resolucao) => console.log(resolucao));

/*ASSÍNCRONO
As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele.
const promesa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Eric", idade: 28 });
    }, 1000);
  } else {
    reject(Error("Um erro ocorreu"));
  }
});
promesa.then((resolucao) => console.log(resolucao));*/

/*THEN().THEN()
O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.
const promesa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Eric", idade: 28 });
    }, 1000);
  } else {
    reject(Error("Um erro ocorreu"));
  }
});

const retorno = promesa
  .then((resolucao) => {
    resolucao.profissao = "Desenvolvedor web";
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    console.log(rejeitada);
  });
console.log(retorno);*/

/*CATCH()
O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada. ta no exemplo acima*/

/*THEN(RESOLVE, REJECT)
Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método then, como segundo argumento.
const promesa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Eric", idade: 28 });
    }, 1000);
  } else {
    reject(Error("Um erro ocorreu"));
  }
});

const retorno = promesa
  .then((resolucao) => {
    resolucao.profissao = "Desenvolvedor web";
    return resolucao;
  })
  // resoluçao, reject e finally no mesmo then
  .then(
    (resolucao) => {
      console.log(resolucao);
    },
    (rejeitada) => {
      console.log(rejeitada);
    }
  )
  .finally(() => {
    console.log("acabou");
  });
console.log(retorno);*/

/*FINALLY()
finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada. ta no exemplo acima*/

/*PROMISE.ALL()
Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});*/

/*PROMISE.RACE()
Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.*/
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1500);
});

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
