let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';

function cliqueBotao() {
    console.log('O botão foi clicado');
};

function loveJS() {
    alert('Eu amo JS');
}

function estiveEmCidade() {
    let nomeCidade = prompt('Me diga o nome de uma cidade');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
};

function soma() {
    let numero1 = parseInt(prompt('Me diga um número'));
    let numero2 = parseInt(prompt('Me diga outro número'));
    alert(numero1 + numero2);
}