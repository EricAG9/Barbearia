const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema ({
    salaoId: {
        type: mongoose.Types.ObjectId, // verifica se existe o id no banco de salao
        ref: 'Salao', // verificando a integridade dos dados
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    comissao: {
        type: Number, // % de comissao sobre o preço
        required: true
    },
    duracao: {
        type: Number, // duração do serviço em minutos
        required: true
    },
    recorrencia: {
        type: Number, // periodo de recorrencia que o cliente vai utilar novamente o serviço em dias
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    status: {
        type: String,
        require: true,
        enum: ['A', 'I', 'E'],
        default: 'A' // se o usuario nao adicionar nada ele vai adicionar automaticamente o A = Ativo.
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Servico', servico); // exporta a função salao para usarmos o esquema no banco de dados