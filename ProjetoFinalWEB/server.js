const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/eventosdb', { useNewUrlParser: true, useUnifiedTopology: true });

const eventoSchema = new mongoose.Schema({
    nome: String,
    data: String,
    local: String
});

const Evento = mongoose.model('Evento', eventoSchema);

app.get('/api/eventos', async (req, res) => {
    try {
        const eventos = await Evento.find();
        res.json(eventos);
    } catch (error) {
        res.status(500).send('Erro ao buscar eventos');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
