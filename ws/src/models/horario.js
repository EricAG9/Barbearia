const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema ({
    salaoId: {
        type: mongoose.Types.ObjectId, // verifica se existe o id no banco de salao
        ref: 'Salao', // verificando a integridade dos dados
        required: true
    },
    especialidades: [{
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        required: true
    }],
    colaboradores: [{
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true
    }],
    dias: {
        type: [Number],
        required: true
    },
    inicio: {
        type: Date,
        required: true
    },
    fim: {
        type: Date,
        required: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Horario', horario); // exporta a função salao para usarmos o esquema no banco de dados