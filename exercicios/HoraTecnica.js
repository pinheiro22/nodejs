/**
 * App - Valor da hora de serviço
 */

const read = require('readline-sync')

let remuneração, custo, Investimento, horasTecnica

console.clear()

console.log("# #  #  ##   #      ##  ###      ## ### ##  # # ###  ##  #  ")
console.log("# # # # # # # #     # # #       #   #   # # # #  #  #   # # ")
console.log("### # # ##  ### ### # # ##  ###  #  ##  ##  # #  #  #   # # ")
console.log("# # # # # # # #     # # #         # #   # # # #  #  #   # # ")
console.log("# #  #  # # # #     ##  ###     ##  ### # #  #  ###  ##  #  ")

remuneração = Number(read.question("Digite a remuneração mensal pretendida: ").replace(",","."))

reserva = Number(read.question("Digite a reserva pretendida: ").replace(",","."))

custo = Number(read.question("Digite o custo operacional: ").replace(",","."))

investimento = Number(read.question("Digite o Investimento: ").replace(",","."))

horasTecnica = Number(read.question("Digite a horas trabalhadas por mês: "))

horasTecnica = (remuneração+(remuneração*reserva)/100+custo+(investimento*remuneração)/100)/horasTecnica

console.log
console.clear()
console.log("======================================")
console.log(`=== Horas Tecnica em h: ${h.toFixed(2)}===`)
console.log("======================================")
