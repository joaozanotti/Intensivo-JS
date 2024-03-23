import { opcoesTamanhos, opcoesCores } from "./objetos.js";

const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const imgMiniPulseira = document.getElementById("imagem-miniatura-0");
const imgMiniRelogio = document.getElementById("imagem-miniatura-1");
const imgMiniTela = document.getElementById("imagem-miniatura-2");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");

const botaoTamanho = document.querySelectorAll("[name='opcao-tamanho']");
botaoTamanho.forEach(botao => botao.addEventListener("click", trocarTamanho));

const botaoImagem = document.querySelectorAll("[name='opcao-imagem']");
botaoImagem.forEach(botao => botao.addEventListener("click", trocarImagem));

const botaoCor = document.querySelectorAll("[name='opcao-cor']");
botaoCor.forEach(botao => botao.addEventListener("click", trocarCor));

let tamanhoSelecionado = 1;
let corSelecionada = 1;
let imagemSelecionada = 1;

function trocarTamanho() {
    let idBotao = this.id;
    tamanhoSelecionado = +idBotao.substring(8);

    if (tamanhoSelecionado == 0) {
        imagemVisualizacao.classList.add("caixa-pequena");
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
    tituloProduto.innerHTML = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome.toLowerCase() + " para caixa de " + opcoesTamanhos[tamanhoSelecionado];
}

function trocarCor() {
    let idBotao = this.id;
    corSelecionada = +idBotao.substring(4);

    let linkImagem = selecionarImagem(imagemSelecionada);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + linkImagem;

    imgMiniPulseira.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pulseira;
    imgMiniRelogio.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].relogio;
    imgMiniTela.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].tela;

    tituloProduto.innerHTML = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome.toLowerCase() + " para caixa de " + opcoesTamanhos[tamanhoSelecionado];

    nomeCor.innerHTML = "Cor - " + opcoesCores[corSelecionada].nome;
}

function trocarImagem() {
    let idBotao = this.id;
    imagemSelecionada = +idBotao.substring(7);

    let linkImagem = selecionarImagem(imagemSelecionada);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + linkImagem;
}

function selecionarImagem(idImagem) {
    let linkImagem;

    switch (idImagem) {
        case 0:
            linkImagem = opcoesCores[corSelecionada].pulseira;
            break;
        case 1:
            linkImagem = opcoesCores[corSelecionada].relogio;
            break;
        case 2:
            linkImagem = opcoesCores[corSelecionada].tela;
            break;
    }

    return linkImagem;
}