const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    else if(req.url == "/about"){
        res.write('About Page');
        res.end();
    }
    else if(req.url == "/contact"){
        res.write('Contact Page');
        res.end();
    }
    else if(req.url == "/service"){
        res.write('Service Page');
        res.end();
    }
});

const port = 5050;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});