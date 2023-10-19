const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  //selecionar o li com o 'ativo', primeiro vai remover o ativo de todas li e em seguida adicionar o 'ativo' apenas que for clicado
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  //loop de cada item, pegando o item e seu index, a cda item adiciona um evento de click e apos o click faz a função de activeTab passando o index do item
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
