export default function accordion(){
  const dt = document.querySelectorAll("dt");
  
  dt[0].nextElementSibling.classList.add('ativarAccordion');

  function executaAccordion(event){
    event.target.nextElementSibling.classList.toggle('ativarAccordion');
  }

  dt.forEach((item) => {
    item.addEventListener("click", executaAccordion)
  })
}