const readline = require('readline-sync')

let positivos = []
let negativos = []

for (let i = 0; i < 10; i++) {
    let numero = readline.questionInt("Digite um número: ")
    if (numero >= 0) {
        positivos.push(numero)
    } else {
        negativos.push(numero)
    }
}

console.log("Números positivos:", positivos)
console.log("Números negativos:", negativos)