const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema ({
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
    nome: {
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
    contaBancaria: { // Depois melhorar as validações
        titular: {
            type: String,
            required: true
        },
        cpfCnpj: {
            type: String
        },
        banco: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        agencia: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        dv: {
            type: String,
            required: true
        },
    },
    recipientId: {
        type: String,
        required: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
});



module.exports = mongoose.model('Colaborador', colaborador); // exporta a função salao para usarmos o esquema no banco de dados