//Saber como usar funções é um dos conceitos fundamentais da programação e do desenvolvimento de software. 
//As funções desempenham um papel crucial na organização, modularização e reutilização de código.

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, 
//que serão recebidos como parâmetro.

function CalcularIMC(altura, peso){
    let IMC = peso / (altura * altura);
    console.log(IMC.toFixed(2));
}

CalcularIMC(1.75, 117.9);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(num){
    let fatorial;
    if (num < 0){
        fatorial = 'Não existe fatorial de números negativos'
    } else if (num == 0){
        fatorial = 1;
    }else {
        fatorial = num;
        while (num > 1){
            fatorial *= (num-1);
            num--;
        }
    }
    return fatorial;
}
console.log(calcularFatorial(5));

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
//Para isso, considere a cotação do dólar igual a R$4,80.

function ConverterDolarParaReal(valorEmDolar){
    let resultado = valorEmDolar * 4.80;
    return resultado.toFixed(2);
}

console.log( ConverterDolarParaReal(7.95));

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function CalcularAreaEPerimetro(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Essa sala tem ${area} de área; e ${perimetro} de perímetro`);
}

CalcularAreaEPerimetro(20,5);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. 
//Considere Pi = 3,14.

function CalcularAreaEPerimetroCirculo(raio){
    let pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;

    area = area.toFixed(2);
    perimetro = perimetro.toFixed(2);
    console.log(`Essa sala tem ${area} de área; e ${perimetro} de perímetro`);
}

CalcularAreaEPerimetroCirculo(8);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero){
    index = 0
    let resultado;
    while (index <= 10){
        resultado = numero * index
        console.log(`${numero} x ${index} = ${resultado}` );
        index++;
    }
}

tabuada(8);