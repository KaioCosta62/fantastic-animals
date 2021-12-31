export default function menuMobile(){
  const btn = document.querySelector('[data-menu = button]');
  const menuList = document.querySelector('[data-menu = list]');

  function toggleMenu(){
    menuList.classList.toggle('ativarMenu');
    btn.classList.toggle('animacaoBtn')
  }
  btn.addEventListener("click", toggleMenu);
}
