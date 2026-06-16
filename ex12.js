let numeros = [5, 6, 2, 10, 8]
let media = 0
for(let i = 0; i < numeros.length; i++){
    media += numeros[i]
}
media = media / numeros.length
console.log("A média dos números é: " + media)
