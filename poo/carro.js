/**
 * POO - desafio
 */

//classe modelo
class Carro {

    //classe atributo
    constructor (ano, cor) {
        this.ano = ano
        this.cor = cor
    }

    //classe ações
criarCarro() {
    console.log("----------------------------")
    console.log("🚗")
    console.log(`Carro de ${this.ano}`)
    console.log(`Carro da cor ${this.cor}`)
}

//Ações
ligar() {
    console.log('Ligando carro ')
}
desligar() {
    console.log('Desligando carro')
}
acelera() {
    console.log('Acelerando')
}
}

//classe 2
class Aviao{
    //atributos
    constructor(envergadura, cor) {
        this.envergadura = envergadura
        this.cor = cor
    }
    //classe ações
    criarAviao(){
        console.log("-------------------------")
        console.log("✈✈")
        console.log(`Aviao de envergadura ${this.envergadura}`)
        console.log(`Aviao da cor ${this.cor}`)
    }

//Ações

voar() {
    console.log('Voando...')
}
acelera(){
    console.log("Decolando...")
}
pousar(){
    console.log('Pousando')
}
}




//criar carro

console.clear()
console.log("######  ####### #######      #####     #    ######  ######  ####### ")
console.log("#     # #     # #     #     #     #   # #   #     # #     # #     # ")
console.log("#     # #     # #     #     #        #   #  #     # #     # #     # ")
console.log("######  #     # #     #     #       #     # ######  ######  #     # ")
console.log("#       #     # #     #     #       ####### #   #   #   #   #     # ")
console.log("#       #     # #     #     #     # #     # #    #  #    #  #     # ")
console.log("#       ####### #######      #####  #     # #     # #     # ####### ")
 
const carro1 = new Carro(2023, "azul X6")
carro1.criarCarro()
carro1.ligar()
carro1.acelera()
carro1.desligar()

const carro2 = new Carro(2023, "amarela URUS")
carro2.criarCarro()
carro2.ligar()
carro2.desligar()

const aviao1 = new Aviao(737, "white")
aviao1.criarAviao()
aviao1.voar()
aviao1.acelera()
aviao1.pousar()
