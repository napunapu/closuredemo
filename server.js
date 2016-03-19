var httpLibrary = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');

httpLibrary.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname;
  console.dir('Got request with URL ' + uri);
  var operation = uri.split('/')[1];
  switch (operation) {
  case 'rest':
    response.writeHead(200, 'OK', { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ 'your_url': uri }));
    response.end();
    break;
  default:
    var filename = path.join(process.cwd(), '.', uri);
        if (filename.indexOf('.html') === filename.length - 5) {
            fs.readFile(filename, 'utf8', function (err, file) {  
                if (err) {  
                    response.writeHeader(500, {'Content-Type': 'text/plain'});  
                    response.end(err + '\n');  
                    return;  
                } else {
                    response.writeHeader(200);
                    response.write(file, 'utf-8');
                    response.end();  
                }
            });
        }
  }
}).listen(3000);
console.log('Node.js server listening at port 3000');