var pessoa = {
  nome: "Eric",
  idade: 28,
};
console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var menu = {
  width: 800,
  heigth: 50,
  backgroundColor: "#8AE",
  metadeHeigth() {
    return this.heigth / 2;
  },
};
menu.backgroundColor = "#000";
menu.coler = "blue";
menu.esconder = function () {
  console.log("Esconde");
};
