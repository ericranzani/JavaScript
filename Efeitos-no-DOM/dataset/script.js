//isolando o codigo do vagedor por tabs
function initTabNav() {
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
}
initTabNav();

function initAccordion() {
  const accordionIList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionIList.length) {
    accordionIList[0].classList.add(activeClass);
    accordionIList[0].nextElementSibling.classList.add(activeClass);

    //função para que a ação dele adicione a classe 'ativo' no elemento seguinte na qual vai ser o 'dd'
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionIList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //forma alternativa
    //const topo = section.offsetTop;
    //window.scrollTo({
    //  top: topo,
    //  behavior: "smooth",
    //});
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionsVisible = sectionTop - windowMetade;
        if (isSectionsVisible) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
