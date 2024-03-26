const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema ({
    nome: {
        type: String,
        require: [true, "Nome é obrigatório"],
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        require: [true, "Email é obrigatório"],
    },
    senha: {
        type: String,
        require: [true, "Senha é obrigatório"],
    },
    telefone: String, 
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pai: String,
    },
    geo: {
        tipo: String,
        cordinates: Array,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

salao.index({ geo: '2dsphere'}); // foi criado esse index para poder trabalhar com latitude e longitude

module.exports = mongoose.model('Salao', salao); // exporta a função salao para usarmos o esquema no banco de dados