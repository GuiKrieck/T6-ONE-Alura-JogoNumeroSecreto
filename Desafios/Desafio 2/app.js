// Saber como usar funções é um dos conceitos fundamentais da programação e do desenvolvimento de software. 
//As funções desempenham um papel crucial na organização, modularização e reutilização de código.

//Criar uma função que exibe "Olá, mundo!" no console.

function exibirOlaMundo(){
    console.log('Olá, Mundo!');
}

exibirOlaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome(nome){
    console.log(`Olá, ${nome}!`);
}

exibirNome('Guilherme');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobrarNumero(numero){
    return numero + numero;
}

console.log(dobrarNumero(8));

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calculaMedia(valor1, valor2, valor3){
    return (valor1 + valor2 + valor3) / 3;
}
console.log(calculaMedia(5,8,10));

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function DefineMaiorValor(numero1, numero2){
    return numero1 > numero2 ? numero1: numero2 > numero1 ? numero2 : 'os números são iguais'; 
    
    /*ou
    if (numero1 > numero2){
        return numero1;
    } else if (numero2 > numero 1){
        return numero2
    } else {
        'os numeros são iguais'
    }*/
}

console.log(DefineMaiorValor(6, 2));
console.log(DefineMaiorValor(8,10));
console.log(DefineMaiorValor(5,5));

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function CalcularQuadrado(numero){
    return numero * numero;
}

console.log(CalcularQuadrado(8));