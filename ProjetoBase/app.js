let listaDeNumerosSorteados = [];
let chutesJaFeitos = [];
let textoChutesJaFeitos;
let numeroMaximo = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100' );
}
function habilitarEDesabilidarButtons(disableButtonId, enableButtonId){
    document.getElementById(disableButtonId).setAttribute('disabled', true);
    document.getElementById(enableButtonId).removeAttribute('disabled');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        habilitarEDesabilidarButtons('chute', 'reiniciar');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
        chutesJaFeitos.push(chute);
        textoChutesJaFeitos = `Chutes: ${chutesJaFeitos}`;
        exibirTextoNaTela('h6', textoChutesJaFeitos);
    } 
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista > numeroMaximo){
        listaDeNumerosSorteados.shift();
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    chutesJaFeitos = [];
    exibirTextoNaTela('h6', '');
    habilitarEDesabilidarButtons('reiniciar', 'chute');
}