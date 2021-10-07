var http = require('http');
var dt = require('./myfirstmodule');
const port = 3000

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and tiem are currently: ' + dt.myDateTime());
    res.end();
}).listen(port, function(){
    console.log('estou pronto')
})