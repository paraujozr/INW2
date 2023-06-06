let numero
let total 

numero = parseInt(leia("Digite um número inteiro positivo: "))

for (let x = 1; x <= numero; x++) {
  if (x % 2 == 1) {
    console.log(x)
    total += x
  }
}

console.log("Total: " + total);