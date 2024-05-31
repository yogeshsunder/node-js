const http = require('http');
const data = require('./data');
http.createServer((req, resp)=>{
    resp.writeHead(200, {'content-type': 'aplication\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4300);