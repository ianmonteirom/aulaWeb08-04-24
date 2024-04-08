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