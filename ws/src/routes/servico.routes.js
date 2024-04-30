const express = require('express');
const router = express.Router('');
const Busboy = require('busboy');
const aws = require('../services/aws');
const Salao = require('../models/salao');
const Servico = require('../models/servico');
const { ServiceQuotas } = require('aws-sdk');

router.post('/', async (req, res) => { // funcao req irá enviar dados para o db e res será a resposta.
    let busboy = new Busboy({ headers: req.header });
        busboy.on('finish', async () => {
            try {
                const { salaoId } = req.body;
                let errors = [];
                let arquivos = [];

                if (req.files && Object.keys(req.files) > 0 ) {
                    for (let key of Object.keys(req.files)) {
                        const file = req.files[key];
                        const nameParts = file.name.split('.'); // vai dizer o tipo de foto se é png, jpg, etc...
                        const fileName = `${new Date().getTime()}.${
                            nameParts[nameParts.length - 1]}
                        `; // vai criar o nome do arquivo no banco baseado nos milisegundos, esse nome nunca irá se repetir
                        
                        const path = `servicos/${salaoId}/${fileName}`;

                        const response = await aws.uploadToS3(file, path);

                        if (response.error) {
                            errors.push({ error: true, message: response.message })
                        } else {
                            arquivos.push(path);
                        }
                    }
                }

                if (errors.length > 0) {
                    res.json(errors[0]);
                    return false;
                }

                // cria serviçoes
                let jsonServico = JSON.parse(req.body.servico);
                jsonServico.salaoId = req.body.salaoId;
                const servico = await new Servico(jsonServico).save();

                // cria arquivos
                arquivos = arquivos.map((arquivo) => ({
                    referenciaId: ServiceQuotas._id,
                    model: 'Servico',
                    arquivo,
                }));

                await Arquivos.insertMany(arquivos);

                res.json({ error: false, arquivos });

            } catch (err) {
                res.json({ error: true, message: err.message }); // aqui sera retornado um objeto json e apresentará a mensagem de erro
            }
        });
    req.pipe(busboy);
});

module.exports = router;