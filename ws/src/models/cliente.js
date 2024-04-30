const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema ({
    nome: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    },
    foto: {
        type: String,
        require: true
    },
    dataNascimento: {
        type: String, // dia / mes / ano por isso vou deixar string
        require: true
    },
    sexo: {
        type: String,
        enum: ['M', 'F'], // Aqui ele valida só essas duas letras
        require: true
    },
    status: {
        type: String,
        require: true,
        enum: ['A', 'I'],
        default: 'A' // se o usuario nao adicionar nada ele vai adicionar automaticamente o A = Ativo.
    },
    documento: {
        tipo: {
            type: String,
            enum: ['individual', 'corporation'],
            required: true
        },
        numero: {
            type: String,
            required: true
        },
    },
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pai: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
});



module.exports = mongoose.model('Cliente', cliente); // exporta a função salao para usarmos o esquema no banco de dados