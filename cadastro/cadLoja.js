const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');

mongoose.connect('mongodb://127.0.0.1:27017/loja', 
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error : '))
db.once('open',function(){
    console.log("Estamos conectados ao mongoDB")
})

const produtoSchema = new mongoose.Schema({
    codigo : String,
    descricao : String,
    valor : Number,
    estoque : Number
});

const Produtos = mongoose.model('Produtos', produtoSchema);

function lerCSVSalvarNoMongo(){
    const resultados = [];

    fs.createReadStream('exemplo - base.csv')
    .pipe(csv())
    .on('data', (dados)=>{
        resultados.push(dados);
    })
    .on('end', ()=>{
        Produtos.initMany(resultados)
        .then(()=>{
            console.log("Dados inseridos com sucesso");
            mongoose.connection.close();
        })
        .catch((error)=>{
            console.error("Erro ao importar dados", error);
            mongoose.connection.close();
        })
    })
}

lerCSVSalvarNoMongo();

