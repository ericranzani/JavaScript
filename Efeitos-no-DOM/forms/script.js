const contato = document.querySelector("#contato");
console.log(contato.elements.nome.value);
console.log(document.forms);

/*VALUES
A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.*/
const texto = document.querySelector(".texto");
function handleKeyUp(event) {
  console.log(event.target.value);
  texto.innerText = event.target.value;
}
//contato.addEventListener("keyup", handleKeyUp);
contato.addEventListener("change", handleKeyUp);
