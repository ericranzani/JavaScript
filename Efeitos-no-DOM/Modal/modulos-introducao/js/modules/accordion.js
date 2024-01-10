export default function initAccordion() {
  const accordionIList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
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
