const http = require('node:http');

const userRequestHandler = require('./RoutingAndform');

const server = http.createServer(userRequestHandler);


server.listen(5000, () => {
     console.log('Server running on address http://localhost:5000');
});