const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    // 사용자가 입력해서 들어온 url 확인
    console.log(req.url);

    if(req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    } else if (req.url == '/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('User list\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', '')
        res.end('Not Found\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});