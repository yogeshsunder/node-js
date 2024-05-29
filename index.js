const http = require('http');
const colors = require('colors');
http.createServer((req,resp)=>{
    resp.write("<h1>My name is Yogi<h1>", colors.red);
    resp.write("Yogi is GoGreen", colors.red);
    resp.end();
}).listen(4500);