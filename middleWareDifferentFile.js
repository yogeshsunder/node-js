const express = require('express');
const reqFilter = require('./middlewareOutfile');
const route = express.Router();
const app = express();

route.use(reqFilter);

//app.use(reqFilter);

app.get('/', (req, resp)=>{
    resp.send('Welcome to the Home Page.')
});

app.get('/users', (req, resp)=>{
    resp.send('This is Users Page.');
});

route.get('/about', (req, resp)=>{
    resp.send('This is about Page.');
});

route.get('/help', (req, resp)=>{
    resp.send('This is help Page.');
});

app.use('/', route);

app.listen(5200);