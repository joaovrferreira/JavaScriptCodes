var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "joaov",
  password: "jvrf2401",
  database: "cadastro"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM clientes", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  con.end();
});
