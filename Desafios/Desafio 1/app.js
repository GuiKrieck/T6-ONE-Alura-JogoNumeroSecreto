//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
document.querySelector('h1').innerHTML = 'Hora do Desafio';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function exibirMensagemNoConsole(){
    console.log('O botão Foi clicado');
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado
function exibirAlerta(){
    alert('Eu amo JS');
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, 
//exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function exibirAlertaCidade(){
    let cidade = prompt('Digite o nome de uma cidade.');
    alert(`Estive em ${cidade} e lembrei de você`)
}

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

function exibirAlertaSoma(){
    let numero1 = prompt("Digite o primeiro número para ser somado");
    let numero2 = prompt("Digite o segundo número para ser somado");
    //quando executei a soma ele estava concatenando, então o prompt mesmo que digitemos um numero nele. retorna uma string
    //ao utilizar o metodo Number foi possivel converter a string em numero e realmente fazer a soma.
    //também é possivel fazer a conversão através do metodo parseInt. lembrete pesquisar a diferença entre os dois
    //ohhh talvez a diferença é que number vai aceitar int e floats, tipo literalmente qualquer tipo de numero. pq o number fica verde?
    //Number é uma interface?
    let resultado = Number(numero1) + Number(numero2);

    alert(`${numero1} + ${numero2} = ${resultado}`);
}

function exibirAlertaSub(){
    let numero1 = prompt("Digite o primeiro número para ser subtraído");
    let numero2 = prompt("Digite o segundo número para ser subtraído");

    let resultado = Number(numero1) - Number(numero2);

    alert(`${numero1} - ${numero2} = ${resultado}`);
}

function exibirAlertaMult(){
    let numero1 = prompt("Digite o primeiro número para ser multiplicado");
    let numero2 = prompt("Digite o segundo número para ser multiplicado");

    let resultado = Number(numero1) * Number(numero2);

    alert(`${numero1} x ${numero2} = ${resultado}`);
}

function exibirAlertaDiv(){
    let numero1 = prompt("Digite o primeiro número para ser dividido");
    let numero2 = prompt("Digite o segundo número para ser dividido");

    //devido a divisões terem muito mais chances de dar um numero quebrado, decidi converter tudo pra float
    //ai depois decidi mudar tudo pra Number
    let resultado = Number(numero1) / Number(numero2);
    let resto = Number(numero1) % Number(numero2);

    alert(`${numero1} / ${numero2} = ${resultado} essa divisão tem o resto: ${resto}`);
}

function exibirAlertaPorcentagem(){
    let numero1 = prompt("Digite a porcentagem desejada");
    let numero2 = prompt("Digite o total");
    let porcentagem = numero1 / 100;

    let resultado = Number(numero2) * Number(porcentagem);


    alert(`${numero1}% de ${numero2} = ${resultado}`);
}
