/*REGEXP CONSTRUCTOR
Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos. Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.*/
const regexp = /\w+/gi;

// Se passarmos uma string, não precisamos dos //
// e devemos utilizar \\ para meta characters, pois é necessário
// escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp("\\w+", "gi");
const regexpObj2 = new RegExp(/\w+/, "gi"); //modelo mais recente

const frase = "JavaScript Linguagem 101";
console.log(frase.replace(regexpObj1, "X"));
// X X X

// Exemplo complexo:
const regexpTELEFONE1 =
  /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp(
  "(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}",
  "g"
);

/*PROPRIEDADES
Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma
console.log(regexp.flags); // 'gi'
console.log(regexp.global); // true
console.log(regexp.ignoreCase); // true
console.log(regexp.multiline); // false
console.log(regexp.source); // '\w+'
.*/

/*REGEXP.TEST()
O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.*/
const regexp2 = /Java/g;
const frase2 = "JavaScript e Java";
/*
console.log(regexp2.lastIndex); //0
console.log(regexp2.test(frase2)); //true
console.log(regexp2.lastIndex); //4
console.log(regexp2.test(frase2)); //true
console.log(regexp2.lastIndex); //17
console.log(regexp2.test(frase2)); //false
console.log(regexp2.lastIndex); //0
console.log(regexp2.test(frase2)); //true
*/

/*TEST() EM LOOP
Podemos utilizar o while loop, para mostrar enquanto a condição for verdadeira. Assim retornamos a quantidade de match's.*/
let i = 1;
while (regexp2.test(frase2)) {
  console.log(i++, regexp2.lastIndex);
}

/*REGEXP.EXEC()
O exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.*/
const regexp3 = /Script/g;
const frase3 = "JavaScript, TypeScript, CoffeeScript, Java";

let regexpResult;
while ((regexpResult = regexp3.exec(frase3)) !== null) {
  console.log(regexpResult[0]);
}
