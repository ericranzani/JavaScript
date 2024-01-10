export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }
    /*
    para encurtar o codigo podemos utilizar uma unica função utilizando o toggle, já que as duas funções são praticamente iguais, o toggle irá adicionar caso não tiver o "ativo" e irar revomer caso tiver"ativo" e for chamada essa function
    function fecharModal(event) {
      event.preventDefault();
      containerModal.classList.remove("ativo");
    }
    */
    function cliqueForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
