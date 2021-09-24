const express = require('express');
//const bodyParser = require('body-parser');
const app = express()
const data = require('./db.json')

app.use(express.json());
//app.use(bodyParser.json());  res.status(200).json(data);

app.get('/clients', function(req, res) {
    res.json(data);
})

app.get('/clients/:id', (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    res.json(client);
})
   

app.post('/clients', (req, res) => {
    const { id, nome, idade } = req.body;

    // salvar

    res.json({id, nome, idade});
})

app.put('/clients/:id', (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    const { nome } = req.body;
    client.nome = nome;

    res.json(client);
})

app.delete('/clients/:id', (req, res) => {
    const { id } = req.params;
    const clientsFiltered = date.filter(client => client.id != id);

    res.json(clientsFiltered);
})

app.listen(3000, function (){
    console.log('server is running')
})