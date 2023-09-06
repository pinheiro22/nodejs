/**
 * APP jogo JokenPo
 */

const read = require('readline-sync')

let opcao

console.clear()
console.log("Escolha Papel, Tesoura ou Pedra")
console.log("")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
opcao = Number(read.question("Escolha entre os numeros: "))
