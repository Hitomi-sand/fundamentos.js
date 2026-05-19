const prompt = require("prompt-sync")();

let numeros=[]

for(let i=1; i<= 5;i++){
    let numero=prompt("digite seu numero:");
    numeros.push(numero)
}

let maior = Math.max(...numeros)

 console.log("o numero de menor para maior:",maior)
