<<<<<<< HEAD
//iniciando a chamada ao banco de dados, tudo é padrão 

const mongoose = require('mongoose'); 
const URI = 'mongodb+srv://ericagoficial:QXindonnceOwS3V4@clusterdev.gctwbb3.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDev'; 

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is up'))
=======
//iniciando a chamada ao banco de dados, tudo é padrão 

const mongoose = require('mongoose'); 
const URI = 'mongodb+srv://ericagoficial:QXindonnceOwS3V4@clusterdev.gctwbb3.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDev'; 

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is up'))
>>>>>>> 2c9806e28f5cf0fd57b64e91d10c645fef7535d6
    .catch(() => console.log(err));