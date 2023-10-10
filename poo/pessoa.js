/**
 * POO - Estudo do encapsulamento
 */

//classe modelo
class Pessoa {
    //atributos
    constructor(nome, idade) {
        this.nome = nome //variavel pública
        //------------------------------------------------------
        let _idade = idade //let _idade (encapsular a variavel)
        //métodos get e set (para acessar a variavel idade)
        this.getIdade =  () => {
            return _idade
        }
        this.setIdade = (novaIdade) => {
            _idade = novaIdade
        }
        //------------------------------------------------------
    }
    //métodos (ações)
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.getIdade()} anos.`)
    }
}

console.clear()
/*** Instanciar(criar) objetos ***/
const pessoa1 = new Pessoa("Gustavo", 19)
pessoa1.apresentar()
pessoa1.setIdade(19)
pessoa1.apresentar