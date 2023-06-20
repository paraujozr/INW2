const leia = require("prompt-sync")()
let mat  = ["mat1","mat2","mat3","mat4"]  //codigos = mat
let alunos = ["Rafael","Ronaldo","Paulo","Pietro"] //produtos = alunos
let notas = [10,8,9,6] //preços = notas

console.log("MAT\tALUNO\tNOTA")
console.log("-------------------------------------")
for(let i=0; i<mat.length; i++){
    console.log(mat[i]+'\t'+alunos[i]+'\t'+notas[i])
}
console.log("-------------------------------------")

console.log("Digitação de notas")
for(let i=0; i<mat.length; i++){
    console.log(mat[i]+'\t'+alunos[i])
    notas[i] = leia("Digite a nota do aluno : ")
}

console.log("MAT\tALUNO\tNOTA")
for(let i=0; i<mat.length; i++){
    console.log(mat[i]+'\t'+alunos[i]+'\t'+notas[i])
}

console.log("ALTERAÇÃO DE DADOS")
let matri = leia("Digite a matricula do aluno que deseja troca o nome : ")
for(let i=0; i<mat.length; i++){
    if(mat == mat[i]){
        console.log("Nome atual do produto "+aluno[i])
        aluno[i] = leia("Digite o novo nome : ")
    }
}

console.log("MAT\tALUNO\tNOTA")
console.log("-------------------------------------")
for(let i=0; i<mat.length; i++){
    console.log(mat[i]+'\t'+alunos[i]+'\t'+notas[i])
}
console.log("-------------------------------------")
