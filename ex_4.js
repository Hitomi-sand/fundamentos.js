const prompt = require("prompt-sync")();

let tabuada = [];

let numero = Number(prompt("Digite seu número: "));

tabuada.push(numero)

for(let i = 1; i < 11; i++ ) {
    console.log(numero, " X ", i ,"=", (numero * i))
}