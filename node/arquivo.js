const {error} = require('console')
let {readFile} = require('fs')

readFile("arquivo.txt","utf-8",(error,texto)=>{
    if(error){
      throw error;
    } else {
      console.log(texto)
    }
})

writeFile("arquivo.txt", "Texto feito pot write file", (error) =>{
    if (error){
        throw error;
    } else {
        console.log("Escreveu de forma errada")
    }
})