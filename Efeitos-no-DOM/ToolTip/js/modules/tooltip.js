//isolando o codigo do vagedor por tabs
export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  //função para que ao passar/parar o mouse em cima do mapa crie e mostre a box com a informação
  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);

    //Aqui esta criando o objeto para que a box siga o movimento do mouse
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    //quando o mouse sair do mapa, irá passar o parametro tooltipBox para o novo objeto e em seguida chamado o objeto
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  //objeto que utiliza o metodo handle para a remoção da box quando o mouse sair do mapa, e removendo os eventos
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  //Criando a Box de informação
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
