/**
 * Exercício de fixação - POO
 */
const read = require('readline-sync')
const color = require('colors')

//classe modelo
class Conta {
    //Atributos
    constructor (numero, titular, saldo) {
        let _titular = titular
        this.getTitular = () => { 
            return _titular
        }

        let _saldo = saldo
        this.getSaldo = () => { 
            return _saldo
        }

        let _numero = numero
        this.getNumero = () => { 
            return _numero
        }
    }
//ações
exibirSaldo() {
    console.log(`O saldo da conta do ${this.getTitular()} é R$ ${this.getSaldo()}.`)
}
depositar(valor) {
    this.getSaldo() + valor
    console.log(`Crédito de R$ ${valor.toFixed(2)}`)
}
sacar(valor) {
    if (valor <= this.getSaldo()){
        this.getSaldo() - valor
        console.log(`Débito de R$ ${valor.toFixed(2)}`)
    } else {
        console.log("Operação negada! Saldo insuficiente")
    }
    
}
}
class ContaPoupaca extends Conta {
    //atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)

    }
    //metodo
    exibirSaldoPoupanca() {
        console.log(`O saldo da conta Poupanca do ${this.titular} é R$ ${this.saldo.toFixed(2)}.`)
    }
}

/**cliente**/
console.clear()
console.log("BBBBBBBBBBBBBBBBB               AAA               NNNNNNNN        NNNNNNNNKKKKKKKKK    KKKKKKK ")
console.log("B::::::::::::::::B             A:::A              N:::::::N       N::::::NK:::::::K    K:::::K ")
console.log("B::::::BBBBBB:::::B           A:::::A             N::::::::N      N::::::NK:::::::K    K:::::K ")
console.log("BB:::::B     B:::::B         A:::::::A            N:::::::::N     N::::::NK:::::::K   K::::::K ")
console.log("  B::::B     B:::::B        A:::::::::A           N::::::::::N    N::::::NKK::::::K  K:::::KKK ")
console.log("  B::::B     B:::::B       A:::::A:::::A          N:::::::::::N   N::::::N  K:::::K K:::::K    ")
console.log("  B::::BBBBBB:::::B       A:::::A A:::::A         N:::::::N::::N  N::::::N  K::::::K:::::K     ")
console.log("  B:::::::::::::BB       A:::::A   A:::::A        N::::::N N::::N N::::::N  K:::::::::::K      ")
console.log("  B::::BBBBBB:::::B     A:::::A     A:::::A       N::::::N  N::::N:::::::N  K:::::::::::K      ")
console.log("  B::::B     B:::::B   A:::::AAAAAAAAA:::::A      N::::::N   N:::::::::::N  K::::::K:::::K     ")
console.log("  B::::B     B:::::B  A:::::::::::::::::::::A     N::::::N    N::::::::::N  K:::::K K:::::K    ")
console.log("  B::::B     B:::::B A:::::AAAAAAAAAAAAA:::::A    N::::::N     N:::::::::NKK::::::K  K:::::KKK ")
console.log("BB:::::BBBBBB::::::BA:::::A             A:::::A   N::::::N      N::::::::NK:::::::K   K::::::K ")
console.log("B:::::::::::::::::BA:::::A               A:::::A  N::::::N       N:::::::NK:::::::K    K:::::K ")
console.log("B::::::::::::::::BA:::::A                 A:::::A N::::::N        N::::::NK:::::::K    K:::::K ")
console.log("BBBBBBBBBBBBBBBBBAAAAAAA                   AAAAAAANNNNNNNN         NNNNNNNKKKKKKKKK    KKKKKKK ")

//criação Vaamond
let cc1 = new Conta(1, "Robson Vaamond", 2900)
console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`.green)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(20)
cc1.exibirSaldo()
console.log()

//criação Sirlene
let cc2 = new Conta (2, "Sirlene Aparecida", 3000)
console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc2.getNumero()}`.green)
cc2.exibirSaldo()
cc2.depositar(2000)
cc2.exibirSaldo()
cc2.sacar(20)
cc2.exibirSaldo()
console.log()

let cc3 = new Conta (3, "Leandro Ramos", 1000)
console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc3.getNumero()}`.green)
cc3.exibirSaldo()
cc3.depositar(2000)
cc3.exibirSaldo()
cc3.sacar(20)
cc3.exibirSaldo()
console.log()


//criação Poupança Vaamond
let cp1 = new Conta(10,"Robson Vaamond", 6000)
console.log(`Cliente: ${cp1.getTitular()} | conta: ${cp1.getNumero()}`.yellow)
cp1.exibirSaldo()
console.log()
//criação Poupança Sirlene
let cp2 = new Conta(20,"Sirlene Aparecida", 2000)
console.log(`Cliente: ${cp2.getTitular()} | conta: ${cp2.getNumero()}`.yellow)
cp2.exibirSaldo()
console.log()

let cp3 = new Conta(30,"Leandro Ramos", 3000)
console.log(`Cliente: ${cp3.getTitular()} | conta: ${cp3.getNumero()}`.yellow)
cp3.exibirSaldo()
