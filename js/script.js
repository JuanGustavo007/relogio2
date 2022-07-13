const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

function pegarHoras() {
  let data = new Date();
  let pegandoHoras = data.getHours();
  let pegandoMinutos = data.getMinutes();
  let pegandoSegundos = data.getSeconds();
  if (pegandoSegundos < 10) {
    pegandoSegundos = "0" + data.getSeconds();
  }
  if (pegandoMinutos < 10) {
    pegandoMinutos = "0" + data.getMinutes();
  }
  horas.innerHTML = `${pegandoHoras}` + ` :` + ` `;
  minutos.innerHTML = `${pegandoMinutos}` + ` :` + ` `;
  segundos.innerHTML = `${pegandoSegundos}` + ` `;
}
setInterval(pegarHoras, 1000);
