function accordion(){
  const dt = document.querySelectorAll("dt");
  
  dt[0].nextElementSibling.classList.add('ativarAccordion');

  function executaAccordion(event){
    event.target.nextElementSibling.classList.toggle('ativarAccordion');
  }

  dt.forEach((item) => {
    item.addEventListener("click", executaAccordion)
  })
}

function menuInterno(){
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

function navegacaoTab(){
  const images = document.querySelectorAll(".animais-lista li");
  const descricao = document.querySelectorAll(".animais-descricao section");

  descricao[0].classList.add('ativaTab');
  
  function executaTab(index){
    descricao.forEach((item) => {
      item.classList.remove('ativaTab');
    });

    descricao[index].classList.toggle('ativaTab');
  }

  images.forEach((image, index) => {
    image.addEventListener("click",() => {
      executaTab(index);
    })
  })
}

function navegacaoScroll(){
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


function modal(){
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

function dropDown(){
  const dropdown = document.querySelector('[data-dropdown]');
  
  function initDrop(event){
    event.preventDefault();
    dropdown.classList.toggle('ativarDrop');
  }

  dropdown.addEventListener("click", initDrop);
  dropdown.addEventListener("touchstart", initDrop);
}


function funcionamentoEmpresa(){
  const funcionamento = document.querySelector('[data-semana]');

  const diasSemana = funcionamento.dataset.semana;

  const horasFuncionamento = funcionamento.dataset.horario;
  
  const diasSemanaArr = diasSemana.split(',').map(Number);
    
  const horasFuncionamentoArr = horasFuncionamento.split(',').map(Number);

  const data = new Date();

  const diaAtual = data.getDay();

  const horaAtual = data.getHours();

  const verificaDia = diasSemanaArr.indexOf(diaAtual) !== -1;
  
  const verificaHora = horaAtual >= horasFuncionamentoArr[0] && horaAtual < horasFuncionamentoArr[1]

  if(verificaDia && verificaHora){
    funcionamento.classList.add('aberto')
  }else{
    funcionamento.classList.add('fechado')
  }
}

function menuMobile(){
  const btn = document.querySelector('[data-menu = button]');
  const menuList = document.querySelector('[data-menu = list]');

  function toggleMenu(){
    menuList.classList.toggle('ativarMenu');
    btn.classList.toggle('animacaoBtn')
  }
  btn.addEventListener("click", toggleMenu);
}


accordion();
menuInterno();
navegacaoTab();
navegacaoScroll();
modal();
dropDown();
menuMobile()
funcionamentoEmpresa();
 