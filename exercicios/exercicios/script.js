const focoBtn = document.querySelector(".api-botoes-foco");
const curtoBtn = document.querySelector(".api-botoes-curto");
const longoBtn = document.querySelector(".api-botoes-longo");
const todosBotoes = document.querySelectorAll(".botoes");
const inputMusica = document.querySelector("#alternar-musica");
const musica = new Audio("exercicios/luna-rise-part-one.mp3");

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
