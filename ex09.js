const readline = require("readline-sync")
let nome = readline.question("Informe um nome: ")

let nomes = ["Arthur Cervero", "Joui jouki", "Kaiser", "Dante", "Elizabeth"]
for(let i = 0; i < 1; i++){
    // nomes[i] = readline.question("Digite um nome: ")
}
if(nome === nomes[0] || nome === nomes[1] || nome === nomes[2] || nome === nomes[3] || nome === nomes[4]){
    console.log("O nome foi encontrado")
}else if(nome != nomes){
    console.log("O nome não foi encontrado")
}

