const express = require('express');
const dbConnect = require('../mongoDB/mongoDBConnectExport');
const app = express();

app.get('/', async (req, resp)=>{
    let data =  await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});

app.listen(5700);