const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 6016;

http.createServer(function (request, response) {
    console.log(`Request for: ${request.url}`);

    let filePath = '.' + request.url; // Convert request URL to file path

    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    // Set correct content type for CSS
    if (extname === '.css') {
        contentType = 'text/css';
    }

    fs.readFile(filePath, function (err, data) {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');
            console.error(`Error loading ${filePath}:`, err);
            return;
        }
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(data);
    });
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
