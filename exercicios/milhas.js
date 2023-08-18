/**
 * Conversor de Milhas para Km/h
 */

const read = require('readline-sync')

let milhas,km

console.clear

console.log("Conversor de Milhas em Km/h: ")

milhas = (read.question("Digite o valor em milhas:  ")).replace(",",".")
km = (milhas*1.60934)

console.log
console.clear()
console.log("=================================")
console.log(`Velocidade em km: ${km.toFixed(2)}`)
console.log("=================================")