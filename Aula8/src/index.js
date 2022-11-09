const numeros = new Array (15, 13, 16, 22, 35, 87, 64, 19)
const data = new Date ("2022-11-09")

function dataComNumeros(){
    console.log(numeros.sort(function(a, b){return a - b}))
    console.log(data)
}

let html=""
numeros.forEach(function (valor, indice, array){
    html += valor + " posicao | " + indice + " | " + array
})
console.log(html)
