/**
 * APP para saber a diferença da gasolina e etanol
 */

const read = require(`readline-sync`)
const colors = require(`colors`)

let gasolina, etanol

console.clear()
console.log(".########...#######...######..########..#######.")
console.log(".##.....##.##.....##.##....##....##....##.....##")
console.log(".##.....##.##.....##.##..........##....##.....##")
console.log(".########..##.....##..######.....##....##.....##")
console.log(".##........##.....##.......##....##....##.....##")
console.log(".##........##.....##.##....##....##....##.....##")
console.log(".##.........#######...######.....##.....#######.")

gasolina = Number(read.question("Digite o valor da Gasolina: ").replace(",","."))
etanol = Number(read.question("Digite o valor da Etanol: ").replace(",","."))


if (etanol < 0.7 * gasolina){
    console.log("Abastecer com etanol".bgBlue)
} else {
    console.log("Abastecer com gasolina".bgWhite)
}