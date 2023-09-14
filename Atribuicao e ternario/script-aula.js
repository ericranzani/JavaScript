var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

var idade = 19;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber);
// condição ? true : false

//modo abreviado, se caso a condição retornar so uma linha de código, não precisa das chaves {}
var possuiFaculdade = true;
if (possuiFaculdade) 
  console.log("Possui faculdade");
else 
  console.log("Não possui faculdade");
