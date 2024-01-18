const contato = document.querySelector("#contato");
const dados = {};

/*VALUES
A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças
const texto = document.querySelector(".texto");

function handleKeyUp(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    contato.nome.setCustomValidity("O nome é totalmente necessário");
    target.nextElementSibling.innerText = target.validationMessage;
  }
  console.log(event.target.checkValidity());
  console.log(event.target.value);
  texto.innerText = event.target.value;
}
//contato.addEventListener("keyup", handleKeyUp);
contato.addEventListener("change", handleKeyUp);
.*/

/*VALIDAÇÃO
O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modicar com setCustomValidity('')
*/

/* trabalhando com select
function mudandoCor(event) {
  document.body.style.backgroundColor = event.target.value;
}
contato.addEventListener("change", mudandoCor);
*/

/* Diferentes tipos de inputs
function handleKeyUp(event) {
  console.log(event.target.value);
  document.body.style.backgroundColor = event.target.value;
}
contato.addEventListener("change", handleKeyUp);*/

/*CHECKBOX
Retorna o valor de value, se estiver checada ou não. checked retorna true ou false.
function handleKeyUp(event) {
  if (event.target.checked) {
    console.log(event.target.value);
  }
}
contato.addEventListener("change", handleKeyUp);*/

/*RADIO
A diferença entre Radio e Checkbox é que radio aceita apenas uma seleção por grupo. Radio é agrupado pelo atributo name.
function handleKeyUp(event) {
  if (event.target.checked) {
    console.log(event.target.value);
  }
}
contato.addEventListener("change", handleKeyUp);*/

/*PEGANDO TODOS OS VALORES
Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.*/

function handleChange(event) {
  //console.log(event.target.name);
  dados[event.target.name] = event.target.value;
  console.log(dados);
}
contato.addEventListener("change", handleChange);
