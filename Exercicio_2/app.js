function olaMundo() {
    console.log('Olá mundo!');
}
olaMundo();
//----------------------------------------------------//
function olaUsuario(usuario) {
    console.log(`Olá ${usuario}`);
}
olaUsuario('Ruan');
//----------------------------------------------------//
function dobroNumero(numero) {
    return numero * 2;
}
console.log(dobro = dobroNumero(64));
//----------------------------------------------------//
function mediaDeTres(numero1,numero2,numero3) {
    return parseInt((numero1+numero2+numero3) / 3);
}
console.log(mediaDeTres(1,3,9))
//----------------------------------------------------//
function maiorNumero(numero1,numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else if (numero2 > numero1) {
        return numero2;
    } else {
        console.log('Os 2 números são iguais');
    }
}
console.log(maiorNumero(23,25));
//----------------------------------------------------//
function numeroAoQuadrado(numero) {
    return numero * numero;
}
console.log(numeroAoQuadrado(8));
//----------------------------------------------------//
