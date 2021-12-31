export default async  function doarBitcoin(){
  const bitcoin = await fetch('https://blockchain.info/ticker');
  const bitcoinJson = await bitcoin.json();
  const bitcoinPreco = bitcoinJson.BRL.sell;
  document.querySelector('.bitcoin').innerText = (100/bitcoinPreco).toFixed(6)
}