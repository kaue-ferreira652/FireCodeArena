let notas = [7, 2, 10, 9, 5, 1, 4, 8.5]

let aprovados = []
let reprovados = []

for(let i = 0; i < notas.length; i++){
    if(notas[i] >= 7){
        aprovados.push(notas[i])
    }else{
        reprovados.push(notas[i])
    }
}
console.log("Aprovados: " + aprovados)
console.log("Reprovados: " + reprovados)
