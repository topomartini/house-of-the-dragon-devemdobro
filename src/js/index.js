//passo 1 - dar um jeito de pegar o elemento html dos botoes
//passo 2 - dar um jeito de identificar o clique do usuario no botao
//passo 3 - desmarcar o botao selecionado anterior
//passo 4 - marcar o botaoclicado como se estivesse selecionado
//passo 5 - esconder a imagem anteriormente selecionada
//passo 6 - fazer aparecer a imagem correspondente ao botao clicado
//passo 7 - esconder a informacao do dragao anteriormente selecionado
//passo 8 - mostrar a informacao do dragao referente ao botao clicado

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desativarBotaoSelecionado();

        marcarBotaoSelecionado(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        esconderInformacoesAtivas();

        mostrarInformacoes(indice);
    });
});


function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}