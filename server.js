console.log('<<<<<<<<<< ------------------------------------ START ------------------------------------ >>>>>>>>>');
var http_ip = 'localhost';
var http_port = 8888;
var http = require('http'); // Calling the HTTP module.

var server = http.createServer(function(req, res){  // Create server
    require('./router').get(req, res);  // Calling a ‘router’ module and sending it the request & response object.
}); // end server

server.listen(http_port, http_ip);  // Server listen to our ip and port

console.log('Listening to http://' + http_ip + ':' + http_port);