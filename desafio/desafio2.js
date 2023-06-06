//programa que solicita o nome e o ano de nascimento da pessoa
//ano referência: 2023
//se a idade for menor que 3 anos escrever - não atendemos bebes
//se a idade for maior que 3 e menor que 13 escrever - [NOME] - faixa infantil
//se a idade for maior que 13 e menor que 17 escrever - [NOME] - faixa adolescente
//se a idade for maior que 17 e menor que 65 escrever - [NOME] - faixa adulto
//se a idade for maior que 65 escrever - não atendemos idosos
const leia = require("prompt-sync")();
let nome
let anoNascimento
let idade

// Entradas
nome = leia("Digite o seu nome: ")
anoNascimento = parseInt(("Digite o seu ano de nascimento: "))

// Cálculo da idade
idade = 2023 - anoNascimento

// Verificação da faixa etária
if (idade < 3) {
  console.log("Não atendemos bebês.")
} 
else if (idade > 3 && idade <= 13) {
  console.log(nome + " Faixa infantil")
} 
else if (idade > 13 && idade <= 17) {
  console.log(nome + " Faixa adolescente")
} 
else if (idade > 17 && idade <= 65) {
  console.log(nome + " Faixa adulto")
} 
else {
  console.log("Não atendemos idosos.")
}

//fim do programa
console.log("Acabou")