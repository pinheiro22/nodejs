/**
 * PVD - Ponto de vendas
 */

//importação de módulos
const read = require(`readline-sync`)

//variáveis
let total, desconto, valor, dinheiro, troco

console.clear()

console.log("oooooooooo ooooooooo  ooooo  oooo") 
console.log("888    888 888    88o  888    88")  
console.log("888oooo88  888    888   888  88")   
console.log("888        888    888    88888")    
console.log("o888o      o888ooo88      888")     

//entrada 1
valor = Number(read.question("Digite o valor total da compra: ").replace(",","."))
desconto = Number(read.question("Digite o valor total da desconto: ").replace(",","."))
//processamento 1
total = valor - (desconto * valor) / 100
//saida 1
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log("")
console.log("______________________________")
//entrada 2
dinheiro = Number(read.question("Digite o valor pago em dinheiro: "))
//processamento 2 
troco = dinheiro - total
//saida
console.log(`Troco R$ ${troco.toFixed(2)}`)
