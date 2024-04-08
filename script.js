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

let res = document.querySelector('#resultado');
res.innerHTML = `Listas: ${pares}, ${impares}`;

console.log(pares, impares);
