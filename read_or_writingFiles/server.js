/*
const fs = require('fs');

fs.readFile('hi.txt', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})
*/ //dessa forma, o resultado sairá em  buffer: 48 65 6c 6c 6f 20 57 6f 72 6c 64

/*
const fs = require('fs');

fs.readFile('hi.txt', (err, data) => { // poderia ser fs.readFile('hi.txt', "utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data.toString()); // console.log(data);
})

console.log('log from outside'); 
*/ // dessa forma, o console.log fora da função apareceria primeiro no terminal

const fs = require('fs');

try {
    const data = fs.readFile('hi.txt', 'utf-8');
    console.log(data);
}   catch(err) {
    console.error(err);
}

console.log('log from outside'); // dessa forma o script será lido primeiro 