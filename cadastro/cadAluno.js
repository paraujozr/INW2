const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);

const db = mongoose.connection;

db.on('erro', console.error.bind(console, 'conection error : '))
db.once('open',function(){
    console.log("Estamos conectados ao mongoDB")
})
