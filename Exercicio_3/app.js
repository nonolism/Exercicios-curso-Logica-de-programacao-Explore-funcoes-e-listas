function indiceMassaCorporal(altura,peso) {
    return parseFloat((peso / (altura*altura)).toFixed(2));
}
imc = indiceMassaCorporal(1.77, 82);
//---------------------------------------------------------------//
function fatorial(numero) {
    if (numero > 0 && numero <= 1) {
        return 1;
    } 
    else {
        return numero * fatorial(numero - 1);
    }
}
console.log(fatorial(3));
//---------------------------------------------------------------//
function dolarParaReal(dolar) {
    return parseFloat((dolar/4.80).toFixed(2));
}
console.log(dolarParaReal(100));
//---------------------------------------------------------------//
function exibirTextoNaTela(tag, texto) {
    //Função que ira receber uma tag e irá inserir um texto nela
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//---------------------------------------------------------------//

function salaRetangular(altura,largura) {
    let area = largura * altura;
    let perimetro = 2*(largura + altura);
    texto = `O perimetro da sala retangular é de ${perimetro} metros, e a area é de ${area} Metros`;
    exibirTextoNaTela('h2', texto);
}
salaRetangular(4.3,10.5);
//---------------------------------------------------------------//
function salaCircular(raio){
    pi = 3.14;
    let area = (pi * (raio*raio)).toFixed(2);
    let perimetro = ((2*pi) * raio).toFixed(2);
    texto = `O perimetro da sala circular é de ${perimetro} metros, e a area é de ${area} Metros`;
    exibirTextoNaTela('h3', texto);
}
salaCircular(12);
// ---------------------------------------------------------------//
function tabuada(numero) {
    texto = `a tabuada do ${numero} é:<br>
    1x${numero} = ${numero*1}<br>
    2x${numero} = ${numero*2}<br>
    3x${numero} = ${numero*3}<br>
    4x${numero} = ${numero*4}<br>
    5x${numero} = ${numero*5}<br>
    6x${numero} = ${numero*6}<br>
    7x${numero} = ${numero*7}<br>
    8x${numero} = ${numero*8}<br>
    9x${numero} = ${numero*9}<br>
    10x${numero} = ${numero*10}`;
    exibirTextoNaTela('h4', texto);
}
tabuada(5);