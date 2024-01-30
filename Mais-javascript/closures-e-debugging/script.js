//EXEMPLO REAL
/*CLOSURES NA REAL
Todas as funções internas da Factory Function possuem uma closure de $$. As mesmas contém uma referência à variável elements declarada dentro do escopo da função.*/
function $$(selectedElement) {
  const elements = document.querySelectorAll(selectedElement);

  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    return this; //assim podendo encadiar metodos futuros
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const btns = $$("button");
console.log(btns.hide().show());

function handleClick(event) {
  console.log(event.target);
  btns.addClass("active");
}

btns.on("click", handleClick);
