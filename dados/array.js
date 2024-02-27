/**
 * Estrutura de dados
 * Array (vetor)
 */

let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane", "Sirlene"]
console.log(typeof alunosEM1)
//exibindo dados de um array
console.log(alunosEM1.length)
console.log(alunosEM1)
console.table(alunosEM1)
//adicionando dados no array
alunosEM1.push("Jorge") //adiciona ao fim da lista
console.table(alunosEM1)
alunosEM1.unshift("Luiza") //adicionar ao inicio da lista
console.table(alunosEM1)
alunosEM1.splice(4, 0, "Matheus", "Julia") //(indice, 0 -> adiciona)
console.table(alunosEM1)
alunosEM1[12] = "Leandro"
console.log(alunosEM1)
console.table(alunosEM1)
// modificando os dados de um array
alunosEM1[1] = "Victor"
console.table(alunosEM1)
//excluindo dados de um array
alunosEM1.pop() //excluir o último item da lista
console.table(alunosEM1)
alunosEM1.shift() //excluir o primeiro item da lista
console.table(alunosEM1)
alunosEM1.splice(5, 2) //(indice, número de registros excluidos)
console.table(alunosEM1)
delete alunosEM1[3]
console.table(alunosEM1)

//percorrendo um array
let notas = [3, 8, 5, 6, 9, 2]
console.log(notas)
//laço for
for (let i = 0; i < notas.length; i++){
    console.log(notas[i])
}
//forEach
notas.forEach((n) => {
    console.log(n)
})
//map() percorrer o array e gerar outro array modificado
//Exemplo 1: somar 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)
//Exemplo 2: Converter o sistema de pontos para letras
//A (nota > 8) PA (nota entre 5 e 8) NA(nota < 5)
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 8) {
        return "A"
    } else {
        return "PA"
    }
})
console.log(notas)
console.log(notasConvertidas)

//Um array também pode ser criado com um objeto
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
]

console.log(alunosEM3)
console.table(alunosEM3)

//uso do filtro
//Exemplo 1: alunos bolsistas
console.table(alunosEM3.filter((b) => {
    return b.bolsista === true
}))
//Exemplo 2: alunos com mais de 40 anos de idade
console.table(alunosEM3.filter((i) => {
    return i.idade > 40
}))
//Exemplo 3: Calcular a média de idade dos alunos
let somaIdades = alunosEM3.reduce((si, aluno) => {
    return si + aluno.idade
},0) //iniciar a partir do indice 0
console.log(somaIdades)
let mediaIdades = somaIdades / alunosEM3.length
console.log(mediaIdades)