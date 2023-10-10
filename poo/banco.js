/**
 * Exercicio de fixação POO
 */

class Conta {
    constructor (numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }

    //métodos
    exibirSaldo() {
        console.log(`Saldo: ${this.saldo. toFixed(2)}`)
    }
    exibirSaldo() {
        console.log(`Saldo: ${this.saldo. toFixed(2)}`)
    }
    depositar(valor) {
        this.saldo += valor
        console.log(`Credito de R$ ${valor.toFixed(2)}`)
    }
}

/**** Clientes ****/

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
 
console.log(" ")
//instanciar um objeto
let cc1 = new Conta(1, "Leandro Ramos", 10000)
console.log(`Clientes: ${cc1.titular} | conta: ${cc1.numero}`)
cc1.exibirSaldo()

let p1 = new Conta(10, "Leandro Ramos", 10000000)
console.log(`Clientes: ${p1.titular}  | conta: ${p1.numero}`)
p1.exibirSaldo()