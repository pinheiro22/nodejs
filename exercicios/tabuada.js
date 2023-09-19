/**
 * Exemplo de uso do laço for - Tabuada
 */

const read = require ('readline-sync')
let valor

console.clear()
console.log("____TABUADA____")
valor = Number(read.question("Digite o valor da Tabuada:"))
for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = (${valor * i})`)
}