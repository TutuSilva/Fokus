const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const focoTempoDuracao = 1500;
const curtoBt = document.querySelector(".app__card-button--curto");
const curtoTempoDuracao = 300;
const longoBt = document.querySelector(".app__card-button--longo");
const longoTempoDuracao = 900;
const comecarBt = document.querySelector("#start-pause");
const temporizador = document.querySelector(".app__card-timer");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

focoBt.addEventListener("click", () => {
  html.setAttribute("data-contexto", "foco");
  banner.setAttribute("src", "/imagens/foco.png");
  titulo.innerHTML = "Otimize sua produtividade,";
});
curtoBt.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto");
  banner.setAttribute("src", "/imagens/descanso-curto.png");
  titulo.innerHTML = `Que tal dar uma respirada?`;
});
longoBt.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo");
  banner.setAttribute("src", "/imagens/descanso-longo.png");
  titulo.innerHTML = "Hora de voltar a superficie.";
});
