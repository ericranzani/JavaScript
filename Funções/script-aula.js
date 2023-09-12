function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do mar";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}
// dois modos
//1
/*
addEventListener("click", function () {
  console.log("oi");
});*/
//2
function mostraConsole() {
  console.log("oi");
}
addEventListener("click", mostraConsole);

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(90, 1.8); // retorna o imc
console.log(imc2(95, 1.8)); // retorna o imc e undefined

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== null) {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60));

var totalPaises = 192;
function faltaVisitar(paisesVisitados) {
  //var totalPaises = 192;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}
console.log(totalPaises);

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro
