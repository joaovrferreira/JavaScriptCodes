const  express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Playstation"))

app.get('/nelson', function(req, res) { // url 
    res.send('<h1>deu certo essa bagaça</h1>')
})

app.listen(port, function() { // resposta que volta 
    console.log("Bagaça funcionando na porta " + port)
})