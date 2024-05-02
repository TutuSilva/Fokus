const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const comecarBt = document.querySelector("#start-pause");
const temporizador = document.querySelector(".app__card-timer");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const todosBotoes = document.querySelectorAll(".app__card-button");
const textoIniciarPausarBt = document.querySelector("#start-pause span");
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");
const musicaStart = new Audio("/sons/play.wav");
const musicaPausa = new Audio("/sons/pause.mp3");
const musicaZero = new Audio("sons/beep.mp3");
const comecarPausarImg = document.querySelector(
  ".app__card-primary-butto-icon"
);
let tempoDecorridoSegundos = 1500;
let intervaloId = null;

musica.loop = true;
musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

focoBt.addEventListener("click", () => {
  tempoDecorridoSegundos = 1500;
  alterarContexto("foco");
  focoBt.classList.add("active");
});
curtoBt.addEventListener("click", () => {
  tempoDecorridoSegundos = 300;
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});
longoBt.addEventListener("click", () => {
  tempoDecorridoSegundos = 900;
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function alterarContexto(contexto) {
  mostrarTempoTela()
  todosBotoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade. <strong class="app__title-strong">Mergulhe no que importa</strong>  `;

      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`;

      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superficie. <strong class="app__title-strong">Faça uma pausa longa.</strong>`;

      break;
    default:
  }
}

const contagemRegressiva = () => {
  if (tempoDecorridoSegundos <= 0) {
   musicaZero.play();
    alert("Tempo Finalizado!");
    zerar();
    return;
  }
  tempoDecorridoSegundos -= 1;
  mostrarTempoTela();
};

comecarBt.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    musicaPausa.play();
    zerar();
    return;
  }
  musicaStart.play();
  comecarPausarImg.setAttribute("src", `/imagens/pause.png`);
  intervaloId = setInterval(contagemRegressiva, 1000);
  textoIniciarPausarBt.textContent = "Pausar";
}
function zerar() {
  clearInterval(intervaloId);
  textoIniciarPausarBt.textContent = "Começar";
  comecarPausarImg.setAttribute("src", `/imagens/play_arrow.png`);
  intervaloId = null;
}

function mostrarTempoTela() {
  const tempo = new Date(tempoDecorridoSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-br", {
    minute: "2-digit",
    second: "2-digit",
  });
  temporizador.innerHTML = `${tempoFormatado}`;
}

mostrarTempoTela();
