/*SETTIMEOUT()
setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.*/
/*
function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 1000, "Depois de 1s");
*/
//muito comum utilizar setTimemout com função de callbal sendo anônima, assim tendo a sua logica contruida dentro dessa function
setTimeout(() => {
  console.log("testando");
}, 1000);

/*IMEDIATO
Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. Podemos passar uma função anônima diretamente com argumento*/
setTimeout(() => {
  console.log("Após 0s?");
});

/*LOOPS E SETTIMEOUT
Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.*/
for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    //console.log(i);
  }, 300 * i); // fazento o tempo vezes o elemento, assim cada um vai ter um tempo
}

/*THIS E WINDOW
setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window.*/
const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);

/*FORMA QUE DA ERRO
function handleClick(event) {
  setTimeout(function () {
    this.classList.add("active");
  }, 1000);
}
Erro pois window.classList não existe*/

/*ARROW FUNCTION
Quando utilizamos uma Arrow Function como callback, o contexto de this passa a ser do local onde o setTimeout foi iniciado.*/

// this agora é btn.
function handleClick(event) {
  setTimeout(() => {
    console.log(this);
    this.classList.add("active");
  }, 1000);
}

/*SETINTERVAL
setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a quantidade de tempo passar.
function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, "Passou 1s");

// loop a cada segundo
let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000);*/

/*CLEARINTERVAL
clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.*/
const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}
