export default function menuInterno(){
  const links = document.querySelectorAll('a[href ^= "#"]');

  function menuSuave(event){
    event.preventDefault();
    const linkHashtag = event.target.getAttribute("href");
    const elemento = document.querySelector(linkHashtag);
    const topElemento = elemento.offsetTop;

    window.scrollTo({
      top: topElemento,
      behavior: 'smooth'
    })
  }

  links.forEach((link) => {
    link.addEventListener("click", menuSuave);
  })
}