export default function modal(){
  const abrir = document.querySelector('[data-modal = entrar]');
  const fechar = document.querySelector('[data-modal = fechar]');
  const container = document.querySelector('[data-modal = container-modal]');

  function abrirModal(event){
    event.preventDefault();
    return container.classList.toggle('ativarModal')
  }

  function fecharModal(){
    return container.classList.toggle('ativarModal');
  }

  abrir.addEventListener("click", abrirModal);
  fechar.addEventListener("click", fecharModal);
}