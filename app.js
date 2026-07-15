const http = require('node:http');
const server = http.createServer((req, res) => {
});
const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});