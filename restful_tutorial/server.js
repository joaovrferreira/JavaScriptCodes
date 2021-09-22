// install nodemon
// npm install --save-dev nodemon
// or
// npm i -D nodemon
// to run
// npx nodemon ./server.js

const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

let usuarios = [];

app.get("/api/users", (req, res) => {
    res.status(200).json(usuarios);
})

app.post("/api/users", (req, res) => {
    usuarios.push(req.body);
    res.status(200).json(req.body);
})

app.put("/api/users", (req, res) => {
    // Modifica valor por outro
})

app.delete("/api/users ", (req, res) => {
    // Exclui ou desativa valor
})

app.listen(5000, () => {
    console.log("Playstation")
});