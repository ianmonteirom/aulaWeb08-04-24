/* CRIAR UM ALGORITMO QUE LEIA UMA LISTA E RETORNE DUAS LISTAS NOVAS */

let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = [];
let impares = [];

for (let numero of listaNumeros) {
    if (numero % 2 == 0) {
        pares.push(numero);
    } else if (numero % 2 != 0) {
        impares.push(numero);
    }
}

/*
let res = document.querySelector('#resultado');
res.innerHTML = `Listas: ${pares}, ${impares}`;
*/

console.log(pares, impares);

/* COM UMA LISTA DE ALUNOS (OBJETO) VAMOS PERCORRER CADA ALUNO E TRAZER A MEDIA DA NOTA E MOSTRAR O NOME DO ALUNO E SUA MÉDIA */

const listaAlunos = [
    {nome: 'Huguinho', nota: [5, 7]}, 
    {nome: 'Zezinho', nota: [6, 9]},
    {nome: 'Luizinho', nota: [7, 8]}
];

for(aluno of listaAlunos) {
    let media = (aluno.nota[0] + aluno.nota[1]) / 2;
    console.log(`A média do aluno ${aluno.nome} é ${media}`);
}

// VOCÊ PRECISA DESENVOLVER UM ALGORITMO QUE FAÇA UM SORTEIO DE BINGO

const sorteio = [];

while (sorteio.length < 6) {
    let numero1 = Math.ceil(Math.random() * 60);
    if (!sorteio.includes(numero1)) {
        sorteio.push(numero1);
    }
}

sorteio.sort((a, b) => a - b);
console.log(sorteio);

//DESESTRUTURAÇÃO

const usuario = {
    nome: 'Fiap',
    local: 'São Paulo',
    idade: 20
};

//SEM DESESTRUTURAÇÃO
console.log(`Nome e Local: ${usuario.nome} ${usuario.local}`);

//COM DESESTRUTURAÇÃO
let {nome, local} = usuario;
console.log(`${nome} ${local}`);

// ARROW FUNCTION

let items = ['Fusca', 'Belina', 'Gurgel', 'Brasilia', 'Kombi'];
items.forEach(function(item) {
    console.log(item);
})

let items1 = ['Fusca-1', 'Belina-1', 'Gurgel-1', 'Brasilia1-', 'Kombi-1'];
items1.forEach(item1 => console.log(item1))