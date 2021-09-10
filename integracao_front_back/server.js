const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.contentType("application/json")
  res.end(JSON.stringify({
    meu: "json"
  }))
})

app.get('/batata', (req, res) => {
  res.contentType("application/json")
  res.end(JSON.stringify({
    batata: "frita"
  }))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*
  npm init -y
  iniciar projeto

  adicionar pacote
  npm install --save <nome>

  rodar script
  node <nome_arquivo>.js
*/