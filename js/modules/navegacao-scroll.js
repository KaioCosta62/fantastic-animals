export default function navegacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  function scrollNavegation(){
    sections.forEach((section) => {
      const windowMetade = window.innerHeight * 0.5;
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if(sectionTop < 0){
        section.classList.add('ativarNavegacao')
      }
    })
  }
  window.addEventListener("scroll", scrollNavegation)
}
