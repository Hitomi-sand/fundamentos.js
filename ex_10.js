const prompt = require("prompt-sync")();
let Usuario= "admin"
let nome = prompt("digite seu nome: ");
let senhaV=1234
let senha=Number(prompt("digite sua senha:"))
if(nome===Usuario && senha===senhaV){
    console.log("senha e usuario correto.")
}else if(nome!==Usuario && senha===senhaV){
    console.log("usuario esta incorreto.")
}
else if(nome===Usuario && senha!==senhaV){
    console.log("senha esta incorreto.")
}else{
    console.log("senha e usuario esta incorreto")
}
