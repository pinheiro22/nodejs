/**
 * App - Valor da hora de serviço
 */

const read = require('readline-sync')

let reserva, remuneracao, custo, investimento, horasTec

console.clear()

console.log("# #  #  ##   #      ##  ###      ## ### ##  # # ###  ##  #  ")
console.log("# # # # # # # #     # # #       #   #   # # # #  #  #   # # ")
console.log("### # # ##  ### ### # # ##  ###  #  ##  ##  # #  #  #   # # ")
console.log("# # # # # # # #     # # #         # #   # # # #  #  #   # # ")
console.log("# #  #  # # # #     ##  ###     ##  ### # #  #  ###  ##  #  ")

//
reserva = Number(read.question("Digite o valor da reserva: ").replace(",","."))

remuneracao = Number(read.question("Digite a remuneracao mensal pretendida: ").replace(",","."))

custo = Number(read.question("Digite o custo operacional: ").replace(",","."))

investimento = Number(read.question("Digite o Investimento: ").replace(",","."))

horasTec = Number(read.question("Digite a horas trabalhadas por mes: "))

horasTec = (remuneracao+(remuneracao*reserva)/100+custo+(investimento*remuneracao)/100)/horasTec

console.log
console.clear()
console.log("_________________________________")
console.log("======Horas tecnicas======")
console.log(horasTec)
console.log("_________________________________")