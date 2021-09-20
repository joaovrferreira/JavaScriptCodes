const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.get('/ioio', function(req, res) {
    const json = {
        title: "o bagulho é doido"
    }
    res.status(200).json(json);
})
app.listen(port, function(){
    console.log('estou pronto')
})