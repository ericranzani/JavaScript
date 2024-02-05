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

/*STR.MATCH()
O match() é um método de strings que pode receber como argumento uma Regexp. Existe uma diferença de resultado quando utilizamos a flag g ou não.
-Se não tiver match retorna null*/
const regexp4 = /\w{2,}/g;
const regexpSemG = /\w{2,}/;

frase3.match(regexp4);
// ['JavaScript', 'TypeScript', 'CoffeeScript']

frase3.match(regexpSemG);
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]

/*STR.SPLIT()
O split serve para distribuirmos uma string em uma array, quebrando a string no argumento que for passado. Este método irá remover o match da array final.*/
const regexp5 = /Script/g;
const resultado = frase3.split(regexp5);
console.log(resultado);

/*STR.REPLACE()
O método replace() é o mais interessante por permitir a utilização de funções de callback para cada match que ele der com a Regexp.
-Mais utilizado*/
const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp6 = /(?<=<\/?)\w+/g; //pegando todas as tag

const result = tags.replace(regexp6, "div");
console.log(result);

/*CAPTURA
É possível fazer uma referência ao grupo de captura dentro do argumento do replace. Então podemos utilizar $&, $1 e mais.*/
const regexp7 = /<li/g;

const resultCap = tags.replace(regexp7, '$& class="ativo"');
console.log(resultCap);

/*GRUPOS DE CAPTURA
É possível definirmos quantos grupos de captura quisermos.*/
const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const regexp8 = /(\w+@)[\w.]+/g;

const resultEmail = emails.replace(regexp8, "$1gmail.com");
console.log(resultEmail);
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com

/*CALLBACK
Para substituições mais complexas, podemos utilizar um callback como segundo argumento do replace. O valor do return será o que irá substituir cada match.*/
const regexp9 = /(\w+)(@[\w]+)/g;
const emails2 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`;

const resultCallBack = emails2.replace(regexp9, function (...args) {
  //console.log(args);
  if (args[2] === "@homail") {
    return `${args[1]}@hotmail`;
  } else if (args[2] === "@ggmail") {
    return `${args[1]}@gmail`;
  } else if (args[2] === "@oulook") {
    return `${args[1]}@outlook`;
  } else {
    return "x";
  }
});
console.log(resultCallBack);
// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br
