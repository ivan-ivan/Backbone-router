// var express = require('express'),
// 	server = express();

// server.use(express.static('../client'));

// server.get('/students.json', function (req, res) {
// 	res.json();	
// 	// console.log(res.json());	
// });

// server.listen(8888);

var http = require('http'),
    fs = require('fs'),
    path = require('path');

http.createServer(function (request, response) {

    var filePath = '../client' + request.url,
        extname = path.extname(filePath),
        contentType = 'text/html';

    filePath = (filePath === '../client')? '../client/index.html': filePath;
    filePath = (request.url === '/students.json')? './' + request.url: filePath;

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;    
    }

    fs.readFile(filePath, function(error, content) {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content);
    });

}).listen(8888);
