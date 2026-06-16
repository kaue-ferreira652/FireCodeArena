const readline = require("readline-sync")
// let numeros = readline.question("Informe quantos números deseja cadastrar: ")
let multiplosDe3 = 3
let outrosNumeros = 0
let numero = readline.question("Digite um número: ")

for(let i = 0; i < numero; i++){
    if(numero % 3 === 0){
        multiplosDe3 += 1
    }else{
        outrosNumeros += 1
    }
}
console.log("Quantidade de números múltiplos de 3: " + multiplosDe3)
console.log("Quantidade de outros números: " + outrosNumeros)