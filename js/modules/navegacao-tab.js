export default function navegacaoTab() {
  const images = document.querySelectorAll(".animais-lista li");
  const descricao = document.querySelectorAll(".animais-descricao section");

  descricao[0].classList.add("ativaTab");

  function executaTab(index) {
    descricao.forEach((item) => {
      item.classList.remove("ativaTab");
    });

    descricao[index].classList.toggle("ativaTab");
  }

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      executaTab(index);
    });
  });
}
