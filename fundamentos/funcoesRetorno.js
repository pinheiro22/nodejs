/**
 * Estudo das funções
 * Funções simples sem parâmetros e retorno
 */

// sintaxe comum
function somar(num1, num2) {
    return(console.log(num1 + num2))
}

//Para executar a função, devemos passar 2 valores
somar(2, 5)

// função atribuida
let somarA = function (num1, num2) {
    return(console.log(num1 + num2))
}

somarA(5, 5)

//Arrow function
let somarAF = (num1, num2) => {
    return(console.log(num1 + num2))
}

somarAF(2, 2)

