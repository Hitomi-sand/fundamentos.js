const prompt = require("prompt-sync")();

let nomes = [];

for(let i = 0; i < 27; i++){
    let nome = prompt("Digite seu nome: "); //pede o nome do usuario

    nomes.push(nome);//salva o nome no vetor nomes pela função push
}

console.log("nomes cadastrados: ");//percorre o array de nomes posição por posição

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]) //exibe cada nome armazenado
}