const fs = require('fs');
const http = require('http');

http
  .createServer((req, res) => {
    // adding headers
    res.writeHead(200, { 'Content-type': 'json' });

    // Creating a file and adding the timestamp
    const date = new Date();
    fs.writeFileSync('currentDateTime.txt', date.toString());

    // Reading the contents of the file and writing it in response
    const data = fs.readFileSync('currentDateTime.txt', 'utf-8');
    res.write(data);
    res.end();
  })
  .listen(8000);
