export default function dropDown(){
  const dropdown = document.querySelector('[data-dropdown]');
  
  function initDrop(event){
    event.preventDefault();
    dropdown.classList.toggle('ativarDrop');
  }

  dropdown.addEventListener("click", initDrop);
  dropdown.addEventListener("touchstart", initDrop);
}
