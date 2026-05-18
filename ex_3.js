const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite sua 1ª nota: "));
let nota2 = Number(prompt("Digite sua 2ª nota: "));
let nota3 = Number(prompt("Digite sua 3ª nota: "));

if (nota1 + nota2 + nota3 >= 21){
    console.log("Parabéns, voçê passou!!!");
} else {
    console.log("Sinto muito, mas voçê não passou :(");
}