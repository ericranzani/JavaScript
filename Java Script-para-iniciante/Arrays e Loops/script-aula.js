var videoGame = ["Switch", "Ps4", "Xbox"];
//videoGame[0]; ->  Switch
//videoGame[2]; ->  Xbox

//videoGame.pop(); -> Remove o último item e retorna ele
//videoGame.push("3DS"); -> Adiciona ao final da array
//videoGame.length; -> 3

/*
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
*/

for (var i = 0; i < videoGame.length; i++) {
  if (videoGame[i] === "Ps4") {
    break;
  }
  console.log(videoGame[i]);
}

var frutas = ["Banana", "Maça", "Abacaxi", "Limão"];
frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});
 