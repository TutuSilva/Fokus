const focoBtn = document.querySelector(".api-botoes-foco");
const curtoBtn = document.querySelector(".api-botoes-curto");
const longoBtn = document.querySelector(".api-botoes-longo");
const todosBotoes = document.querySelectorAll(".botoes");
const inputMusica = document.querySelector("#alternar-musica");
const musica = new Audio("exercicios/luna-rise-part-one.mp3");
const musicaStart = new Audio("exercicios/play.wav");
const musicaPausa = new Audio("exercicios/pause.mp3");
let tempoBase = 10;
let intervaloBase = null;

focoBtn.addEventListener("click", () => {
  alterarContexto("foco");
  focoBtn.classList.add("active");
});
curtoBtn.addEventListener("click", () => {
  alterarContexto("curto");
  curtoBtn.classList.add("active");
});
longoBtn.addEventListener("click", () => {
  alterarContexto("longo");
  longoBtn.classList.add("active");
});
function alterarContexto(contexto) {
  todosBotoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
}

inputMusica.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

const contagemRegressiva = () => {
  if (tempoBase <= 0) {
    zerarContador();
    return;
  }
  tempoBase -= 1;
  console.log(tempoBase);
};

inputMusica.addEventListener("click", iniciarPausar);

function iniciarPausar() {
  if (intervaloBase) {
    musicaPausa.play();
    zerarContador();
    return;
  }
  musicaStart.play();
  intervaloBase = setInterval(contagemRegressiva, 1000);
}

function zerarContador() {
  clearInterval(intervaloBase);
  intervaloBase = null;
}
