/**
 * App para calcular a média de 2 notas
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//variaveis
let nome, disciplina
let nota1, nota2, media

console.clear()
console.log("___.          .__          __  .__")         
console.log("\\_ |__   ____ |  |   _____/  |_|__| _____")  
console.log("| __ \\/  _ \\|  | _/ __ \\   __\\  |/     \\") 
console.log("| \\_\\ (  <_> )  |_\\  ___/|  | |  |  Y Y  \\" )
console.log("|___  /\\____/|____/\\___  >__| |__|__|_|  /")
console.log("    \\/                 \\/              \\/ ")

//entrada
nome = read.question("Digite o seu nome: ")
disciplina = read.question("Digite a disciplina: ")
nota1 = Number(read.question("Digite a nota1: ").replace(",","."))
nota2 = Number(read.question("Digite a nota2: ").replace(",","."))

//processamento
media = (nota1 + nota2) / 2

//saida
console.clear()
console.log("----------------------------------------")
console.log("Ficha do aluno:")
console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`Nota1: ${nota1}`)
console.log(`Nota2: ${nota2}`)
console.log(`Média final: ${media}`)
console.log("----------------------------------------")


