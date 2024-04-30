const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema ({
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
    servicoId: {
        type: mongoose.Types.ObjectId, // verifica se existe o id no banco de salao
        ref: 'Servico', // verificando a integridade dos dados
        required: true
    },    
    colaboradorId: {
        type: mongoose.Types.ObjectId, // verifica se existe o id no banco de salao
        ref: 'Colaborador', // verificando a integridade dos dados
        required: true
    },
    data: {
        type: Data,
        required: true
    },
    comissao: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Agendamento', agendamento); // exporta a função salao para usarmos o esquema no banco de dados