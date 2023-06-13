const leia = require("prompt-sync")();
let num = leia ("Coloque seu numero: ");
let numMaior = 

while (contador <= 3) {
  let numero = parseInt(prompt(`Digite o ${contador}º número:`));

  if (numero < 0) {
    break;
  }
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }

  soma += numero;
  contador++;
}

console.log(`A soma dos números é: ${soma}`);
console.log(`O maior número digitado foi: ${maiorNumero}`);