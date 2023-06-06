const leia = require("prompt-sync")()

//leia o nome do usuario
//ler o salario
//se o salario for menor que 2500 a pessoa é isenta
//se o salario for acima de 2500 e menor igual a 5000
//pega imposto de 15% - mostra imposto e salario liquido
//se o salario for acima de 5000 paga imposto de 25%
//mostra salario liquido e imposto a pagar

//variaveis
let usuario 
let salarioUsuario
let valorimposto

//entradas
usuario = leia("Digite o nome do usuário : ")
salarioUsuario = parseFloat(leia("Digite o valor do salário : "))

if (salarioUsuario <= 2500){
    console.log(usuario + " Voce é isento!!!");
} 
else if(salarioUsuario > 2500 && salarioUsuario <= 5000){
    valorimposto = salarioUsuario * 0.15
    console.log("Ola seu imposto é" +valorimposto)
    conslole.log("Seu salario liquido é "+(salarioUsuario-valorimposto))
}
else {
    valorimposto = salarioUsuario * 0.25
    console.log("Ola seu imposto é" +valorimposto)
    conslole.log("Seu salario liquido é "+(salarioUsuario-valorimposto))
}


//fim do programa
console.log("Acabou sua sessão")
