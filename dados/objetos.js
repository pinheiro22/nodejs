/**
 * Estrutura de dados
 * Objetos
 */

const funcionario1 = {}
console.log(typeof(funcionario1))
//adicionar dados a estrutura
funcionario1.nome = "Jose"
funcionario1.cargo = "Professor"
funcionario1.email = "joseassisfilho@gmail.com"
funcionario1.salario = 8000
funcionario1.insta = "@prof.joseassis"
//ler (buscar os dados da estrutura)
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificando os dados de uma estrutura
funcionario1.nome = "Jose de Assis"
console.log(funcionario1)
//escluir dados de uma estrutura 
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@email.com",
    salario: 400000
}

console.log(funcionario2)

const endereco1 = {
    locadouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"

}

console.log(endereco1)

const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@email.com",
    salario: 20000,
    ...endereco1 //...spread operator (união de 2 estruturas dados)
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@email.com",
    salario: 2000,
    ...endereco1 //...spread operator (união de 2 estruturas dados)
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "engeheiro",
    email: "ironman@gmail.com",
    salario: "37500",
    armadura: {
        versao: "Mark II",
        ano: "2010",
        reator: "Arc 01"
    },
    suitUP: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.armadura.versao)
funcionario5.suitUP()