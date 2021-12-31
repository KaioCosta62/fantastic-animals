export default function funcionamentoEmpresa(){
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