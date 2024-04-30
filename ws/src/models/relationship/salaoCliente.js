const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema ({
    salaoId: {
        type: mongoose.Types.ObjectId, // verifica se existe o id no banco de salao
        ref: 'Salao', // verificando a integridade dos dados
        required: true
    },
    clienteId: {
        type: mongoose.Types.ObjectId, // verifica se existe o id no banco de salao
        ref: 'Cliente', // verificando a integridade dos dados
        required: true
    },
    status: {
        type: String,
        require: true,
        enum: ['A', 'I'],
        default: 'A' // se o usuario nao adicionar nada ele vai adicionar automaticamente o A = Ativo.
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('SalaoCliente', salaoCliente); // exporta a função salao para usarmos o esquema no banco de dados