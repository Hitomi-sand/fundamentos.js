const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite o seu número: "))

if( numero > 0){
    console.log("Seu número é superior 0")
} else if (numero == 0){
    console.log("Seu número é 0. Insira outro")
} else {
    console.log("Seu número é inferior a 0")
}