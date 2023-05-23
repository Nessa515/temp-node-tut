const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
        return;
    }
    if(req.url === '/about'){
        res.end('Welcome is our short history');
        return;
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Não podemos vê</p>
        <a href='/'>back home</a>
    `);
});

server.listen(5000);