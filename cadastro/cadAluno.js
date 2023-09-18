const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola', 
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

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
});

const Alunos = mongoose.model('Alunos', alunoSchema)

const pedro = new Alunos({
   matricula : 'rm15710',
   nome : 'Pedro Araújo',
   idade : 17,
   turma : '2MIB' 
});

pedro.save();

const rodolfa = new Alunos({
    matricula : 'rm15423',
    nome : 'Rodolfa dos Santos',
    idade : 14,
    turma : '2MIB' 
 });

 rodolfa.save();
