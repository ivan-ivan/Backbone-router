// var express = require('express'),
// 	server = express();

// server.use(express.static('../client'));

// server.get('/students.json', function (req, res) {
// 	res.json();	
// 	// console.log(res.json());	
// });

// server.listen(8888);

var express = require('express'),
    server = express(),
    fs = require('fs');

server.use(express.static('../client'));

server.post('/students.json', function (req, res) {
    var bodyStr = '';
    req.on('data', function (chunk) {
        bodyStr += chunk.toString();
    });
    req.on('end', function () {
        fs.readFile('students.json', function (err, data) {
            var encodedObj = data.toString('utf8'), //encoding what's inside of .json into human symbols
                parsedObj = JSON.parse(encodedObj);
            parsedObj.push(JSON.parse(bodyStr)); //adding newly created parsed obj into array 

            fs.writeFile('students.json', JSON.stringify(parsedObj), function (err) { //rewriting file with new array
                if (err) {
                    console.log(err);
                }
            });
        });
    }); 
});

server.get('/students.json', function (req, res) {
    res.send(); 
});

var server = server.listen(8888);

// var http = require('http'),
//     fs = require('fs'),
//     path = require('path');

// http.createServer(function (request, response) {

//     var filePath = '../client' + request.url,
//         extname = path.extname(filePath),
//         contentType = 'text/html';

//     filePath = (filePath === '../client')? '../client/index.html': filePath;
//     filePath = (request.url === '/students.json')? './' + request.url: filePath;

//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;    
//     }

//     fs.readFile(filePath, function(error, content) {
//         response.writeHead(200, { 'Content-Type': contentType });
//         response.end(content);
//     });

// }).listen(8888);
