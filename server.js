const { hostname } = require('os');
const http = require('http');


const port = 8080; 
const message = `Hello World--Server running at http://${hostname()}:${port}/`; 
const server = http.createServer((req, res) => { 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  res.end(message);
});
  server.listen(port, hostname, () => {
    console.log(message);
});
