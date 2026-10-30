
const container = document.getElementById("folhas-container");

const simbolos = ["🌸"];

for (let i = 0; i < 10; i++) {
    const folha = document.createElement("span");

    folha.classList.add("folha");
    folha.textContent =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    folha.style.left = Math.random() * 100 + "vw";
    folha.style.fontSize = (15 + Math.random() * 20) + "px";
    folha.style.animationDuration = (6 + Math.random() * 10) + "s";
    folha.style.animationDelay = (-Math.random() * 15) + "s";

    container.appendChild(folha);
}
function controlarAudio() {
    var audio = document.getElementById("musicaFundo");
    var botao = document.getElementById("botaoAudio");

    if (audio.paused) {
        audio.play();
        botao.innerText = "Mutar Som";
    } else {
        audio.pause();
        botao.innerText = "Ligar Som";
    }
}