/**
 * APP Calculo de combustivel (valor gasto por kilômetro rodado )
 */

const read = require(`readline-sync`)
const colors = require(`colors`)

let  km, combustivel

console.clear()
console.log("===============================================================")
console.log("== Calculo de combustivel(valor gasto por kilômetro rodado)  ==")
console.log("===============================================================")
console.log("")
km = Number(read.question("Digite a quantidade do KM: ").replace(",","."))
combustivel = Number(read.question("Digite o preco do combustivel: ").replace(",","."))


 
km = (km /combustivel)

console.log(`valor gasto por KM: ${km.toFixed(2)} `)


