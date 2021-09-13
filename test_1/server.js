const express = require('express');
const app = express();
const port = 3000;

// app.use(cors({
//     origin: "*"
// }))

app.get('/', function(req, res) {
    const payload = {
        title: "From backend"
    }
    res.send(JSON.stringify(payload))
    // res.send('<p>mais uma pra conta</p>')
})

app.listen(port, function() {
    console.log('ihaaa')
})