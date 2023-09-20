function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log('seu nome é', nome)
    }
    else{
        console.log(`o seu nome é ${nome}, e voce tem ${idade} anos`)
    }
}

nomeComIdade("Pedro", 17)

function repetirFrase(frase, n=5){
    for(let x=1; x<=n; x++){
        console.log(frase + " "+ x)
    }
}
repetirFrase("viudes vc é corno",4)