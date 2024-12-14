const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

//Use the error event handler to catch the error
 server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1);
  } else {
    console.error(`Server error:`, err);
    process.exit(1);
  }
});

//Listen to the port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});