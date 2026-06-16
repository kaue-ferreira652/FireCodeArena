let numeros = [-17, 8, -42, 35, 10, -3, -29, 55, -74, 6]

for(let i = 0; i < 10; i++){
    console.log(numeros[i])
}
numeros.sort((a, b) => a - b)
console.log(numeros)
