const btPlayPause = document.getElementById("btPlayPause");
const btVoltar = document.getElementById("btVoltar");
const btAvancar = document.getElementById("btAvancar");
const secao = document.getElementById("secao");
const audioSecao = document.getElementById("audioSecao");

btPlayPause.addEventListener("click", playPauseFaixa);
btAvancar.addEventListener("click", avancarSecao);
btVoltar.addEventListener("click", voltarSecao);

const numeroSecoes = 10;
let tocando = false;
let secaoAtual = 1;

function playPauseFaixa() {
    if (tocando) {
        audioSecao.pause();
        tocando = false;
        btPlayPause.className = "bi bi-play-circle-fill";
    } else {
        audioSecao.play();
        tocando = true;
        btPlayPause.className = "bi bi-pause-circle-fill";
    }
}

function trocarFaixa() {
    audioSecao.src = "./books/dom-casmurro/secao" + secaoAtual + ".mp3";
    secao.textContent = "Seção " + secaoAtual;
    tocando = false;
    playPauseFaixa();
}

function voltarSecao() {
    if (secaoAtual == 1) {
        secaoAtual = numeroSecoes;
    } else {
        secaoAtual--;
    }
    trocarFaixa();
}

function avancarSecao() {
    if (secaoAtual == numeroSecoes) {
        secaoAtual = 1;
    } else {
        secaoAtual++;
    }
    trocarFaixa();
}