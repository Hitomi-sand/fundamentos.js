const prompt = require("prompt-sync")(); //importa a biblioteca prompt-sync para permitir entrada de dados no teclado

//cria a variavel idade e converte o valor digitado para número
let idade = Number(prompt("Digite sua idade: "))

//cria a varíavel nome e guarda o nome digitado para nome o valor e digitado pelo usuario
let nome = prompt("Digite seu nome: ")

if(idade >= 18){ 
    console.log(nome + ", você é maior de idade.")
}else{
    console.log(nome + ", você é menor de idade.")
}
