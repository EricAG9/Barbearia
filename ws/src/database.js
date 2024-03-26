//iniciando a chamada ao banco de dados, tudo é padrão 

const mongoose = require('mongoose'); 
const URI = '';

mongoose.set('userNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is up'))
    .catch(() => console.log(err));