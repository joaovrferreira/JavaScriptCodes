const express = require('express');
const cors = require("cors")
const app = express();

app.use(cors({
    origin: "*"
}))

app.get('/', function (req, res) {  
    const payload = {
        hello: "world"
    }
    res.send(JSON.stringify(payload));
}) 

app.listen(3000)
