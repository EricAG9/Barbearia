const express = require('express');
const router = express.Router('');
const Salao = require('../models/salao');
const Servico = require('../models/servico');

router.post('/', async (req, res) => { // funcao req irá enviar dados para o db e res será a resposta.
    try {
        const salao = await new Salao(req.body).save();
        res.json({ salao });
    } catch (err) {
        res.json({ error: true, message: err.message }); // aqui sera retornado um objeto json e apresentará a mensagem de erro
    }
});

router.get('/servicos/:salaoId', async (req, res) => {
    try {
        const { salaoId } = req.params; // pegandp os parametros da variavel salaoId
        const servicos = await Servicos.find({
            salaoId,
            status: 'A'
        }).select('_id titulo');

        res.json({
            servicos: servicos.map(s => ({ label: s.titulo, value: s._id }))
        });
    } catch (err) {
        res.json({error: true, message: err.message});
    }
});

module.exports = router;