const readline = require("readline-sync")

let numeros = readline.question("Informe quantos números deseja cadastrar: ")
let media = 0
for(let i = 0; i < numeros; i++){
    console.log(numeros > numeros[i])
    console.log(numeros < numeros[i])
    media += numeros[i]
}
media = media / numeros.length
console.log("A média dos números é: " + media)

if(numeros >= 7){
    console.log("Aprovado")
}else if(numeros < 7){
    console.log("Reprovado")
}
