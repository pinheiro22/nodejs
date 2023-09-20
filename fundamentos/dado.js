/**
 * Jogo do dado
 */

const read = require('readline-sync')

let face
let escolha = "s"

do {
console.clear()
console.log("------ Jogo do dado -------")
read.question("Pressione a tecla [Enter] para jogar o dado: ")
face = Math.floor(Math.random() * 6)
switch (face) {
    case 0:
        console.log(" _______")
        console.log("|       |")
        console.log("|   O   |")
        console.log("|_______|")  
        break
    case 1:    
        console.log(" _______")
        console.log("|       |")
        console.log("|   O   |")
        console.log("|______ |")  
        break     
    case 2:   
        console.log(" _______")
        console.log("|O      |")
        console.log("|       |")
        console.log("|______O|")  
        break 
    case 3:
        console.log(" _______")
        console.log("|O      |")
        console.log("|   O   |")
        console.log("|______O|")  
        break 
    case 4:
        console.log(" _______")
        console.log("|O     O|")
        console.log("|       |")
        console.log("|O_____O|")  
        break     
    case 5:
        console.log(" _______")
        console.log("|O     O|")
        console.log("|   O   |")
        console.log("|O_____O|")  
        break   
    case 6:      
        console.log(" _______")
        console.log("|O     O|")
        console.log("|O     O|")
        console.log("|O_____O|")  
        break 
    } 

     escolha = read.question("Deseja jogar novamente(s/n)?")   
} while(escolha === "s")
console.log(`Face do dado: ${face}`)