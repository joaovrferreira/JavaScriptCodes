const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.get('/joao', function (req, res) {
    const json = {
        title: "You know how to code!!"
    }
    res.send(JSON.stringify(json));
})
app.listen(port, function(){
    console.log('funcionando');
})
