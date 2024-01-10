//isolando o codigo do vagedor por tabs
export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

dropdownMenus.forEach((menu) => {
  //dessa forma utilizamos tanto evento para desktop=click quanto o evento para mobile=touchstart
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("active");
}
