// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
//console.log(var, marca, portas); R: Pelo fato de esta chamando uma declaração "var" e nao o nome da variavel e por causa da marca e do let pois esses valores não vazam do escopo de bloco

// Como corrigir o erro abaixo?
// R: Colocar a variável dois como global fora da função
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
//R: trocar a declaração da variavel numero do "for" de var para let, assim fazendo com q o valor do "for" fique so no "for"
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
