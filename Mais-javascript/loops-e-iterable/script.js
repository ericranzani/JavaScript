// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const items = document.querySelectorAll("li");

for (item of items) {
  item.classList.add("teste");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (const windowKey in window) {
  console.log(windowKey + ": " + window[windowKey]);
}
