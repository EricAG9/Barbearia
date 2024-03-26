const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev')); // só irá usar o morgan em ambiente de desenvolvimento

app.set('port', 8000); // aqui ele vai abrir na porta 8000

app.listen(app.get('port'), () => {
    console.log(`WS escutando na port ${app.get('port')}`);
}); // aqui esta invocando o app para inicializar