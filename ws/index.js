const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');
require('./database');

app.use(morgan('dev')); // só irá usar o morgan em ambiente de desenvolvimento
app.use(express.json()); // avisando para o backend que irei trabalhar com arquivos json
app.use(busboy());
app.use(busboyBodyParser());
app.use(cors());

app.set('port', 8000); // aqui ele vai abrir na porta 8000

//Rotas

app.use('/salao', require('./src/routes/salao.routes'));

app.listen(app.get('port'), () => {
    console.log(`WS escutando na port ${app.get('port')}`);
}); // aqui esta invocando o app para inicializar