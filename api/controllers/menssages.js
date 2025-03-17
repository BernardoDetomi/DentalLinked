const express = require("express");

const db = require("../db/models")

const router = express.Router();

//criando a rota de cadastro
router.post("/", async (req, res) => {

//recebendo os dados
    var data = req.body;

    await db.Messages.create(data).then((dataMessage) => {
        return res.json({
            error:false,
            message: "Mensagem cadastrada com sucesso!",
            data: dataMessage
        })
    }).catch(() => {
        return res.json({
        error:false,
        message: "Erro: Mensagem nao cadastrada!",
        data
        });
    });
});

module.exports = router;
