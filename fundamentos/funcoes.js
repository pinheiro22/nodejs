/**
 * Estudo das funções
 */

//função simples
function hello() {
    console.log("Hello function")
}

//para executar uma função basta escrever o nome da função junto com parênteses
hello()

//funções atribuidas
const hello2 = function() {
    console.log("Hello function atribuida")
}

hello2()

//funções atribuidas simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function")
}

hello3()

console.log(typeof(hello3))