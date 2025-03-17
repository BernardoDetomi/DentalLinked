const express = require("express");
const cors = require('cors');

const app = express();

// Configura o middleware CORS para permitir a origem específica e métodos necessários
app.use(cors({
    origin: "http://localhost:3000", // Permitir apenas solicitações da origem específica
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"] // Cabeçalhos permitidos
}));

app.use(express.json());

const menssages = require("./controllers/menssages");

//criando as rotas
app.use("/message", menssages)

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
