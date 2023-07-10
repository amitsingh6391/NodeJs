const http = require('http');
const
    colors = require('colors');
http.createServer((req, res) => {
    res.write('<h1 style="color: #FF0000;"> this is Amit Singh,</h1>');
    res.end();
}).listen(4500);

