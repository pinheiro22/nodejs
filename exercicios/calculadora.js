/**
 * Estuda das funções
 * Calculadora
 */

const read = require('readline-sync')

console.clear()
console.log("Calculadora\n") // \n quebra de linha
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Porcentagem1")
let opcao = Number(read.question("Digite a opcao desejada: ").replace(",","."))
//melhorando a expêriencia do usuário(validação)
if(opcao < 1 || opcao > 5) {
    console.log("opção inválida")
    process.exit([0]) //encerra o aplicativo no console
}
console.clear()
let num1 = Number(read.question("Digite o primeiro valor: ").replace(",","."))
let num2 = Number(read.question("Digite o segundo valor: ").replace(",","."))

//Observações funções não atribuidas a variáveis podem ser declaradas no fim do código, funções atribuidas e arrow function precisam ser declaradas no inicio do código
switch (opcao) {
    case 1:
        //executar a função somar
        somar(num1, num2)
        break
    case 2:
        //executar a função somar
        subtrair(num1, num2)
        break  
    case 3:
        //executar a função multiplicar
        multiplicar(num1, num2)
        break 
    case 4:
        //executar a função dividir
        dividir(num1, num2)
        break      
    case 5:
        //executar a funçaõ porcentagem
        porcentagem(num1, num2)
        break       

}

//funçaõ somar
function somar(num1, num2) {
    return console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`)
}
//função subtração
function subtrair(num1, num2) {
    return console.log(`A subtracao de ${num1} - ${num2} = ${num1 - num2}`)
}
//função multiplicar
function multiplicar(num1, num2) {
    return console.log(`A multiplicacao de ${num1} * ${num2} = ${num1 * num2}`)
}
//função dividir
function dividir(num1, num2) { 
    //validação
    if (num2 == 0) {
        console.log("Impossivel a divisão por zero")
        process.exit([0])
    } else {
        return console.log(`A divisao de ${num1} / ${num2} = ${num1 / num2}`)
}
    }

//função porcentagem
function porcentagem(num1, num2) {
    return console.log(`A porcentagem de ${num1} % ${num2} = ${num1 * num2 /100}`)
}