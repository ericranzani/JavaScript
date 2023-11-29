// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 28,
  minhaMae = 60;

if (minhaIdade > minhaMae) {
  console.log("É maior");
} else if (minhaIdade === minhaMae) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //R: True
console.log("expressao", !!expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //R: Truthy
var idade = 28; //R: Truthy
var possuiDoutorado = false; //R: Falsy
var empregoFuturo; //R: Falsy
var dinheiroNaConta = 0; //R: Falsy
console.log("nome", !!nome);
console.log("idade", !!idade);
console.log("possuiDoutorado", !!possuiDoutorado);
console.log("empregoFuturo", !!empregoFuturo);
console.log("dinheiroNaConta", !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else if (brasil === china) {
  console.log("É igual");
} else {
  console.log("Brasil tem menos habitantes");
}

// O que irá aparecer no console?
//R: Falso
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
//R: verdadeiro e ira aparecer "Cão"
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
