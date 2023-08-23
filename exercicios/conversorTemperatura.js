/**
 * Conversor de temperatura
 * Fahrenheit para Celsius
 */

const read = require('readline-sync')

let celsius, fahrenheit
console.clear()
console.log("==============================")
console.log("== Conversor de Temperatura ==")
console.log("== Fahrenheit para Celsius  ==")
console.log("==============================")
console.log("")
//entrada
f = Number(read.question("Digite a temperatura em Fahrenheit: ").replace(",","."))
//processamento
c = (f - 32) / 1.8
//saida
console.log(`Temperatura em Celsius: ${c.toFixed(1)}ºC`)