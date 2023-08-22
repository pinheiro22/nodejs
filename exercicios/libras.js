/**
 * Conversor de peso (líbras - Kg)
 */

const read = require(`readline-sync`)

let libras, Kg

console.log("#       ### ######  ######     #     #####              #    #  #####  ")
console.log("#        #  #     # #     #   # #   #     #             #   #  #     # ")
console.log("#        #  #     # #     #  #   #  #                   #  #   #       ")
console.log("#        #  ######  ######  #     #  #####     #####    ###    #  #### ")
console.log("#        #  #     # #   #   #######       #             #  #   #     # ")
console.log("#        #  #     # #    #  #     # #     #             #   #  #     # ")
console.log("####### ### ######  #     # #     #  #####              #    #  #####  ")
                                                                       
//entrada
libras = Number(read.question("Digite o peso em libras: ").replace(",","."))
//processamento 
kg = libras / 2.2046
//saida
console.log(`Peso em Kg: ${kg.toFixed(2)}`)