const express = require('express');
const dbConnect = require('../mongoDB/mongoDBConnectExport');
const app = express();
app.use(express.json());

app.get('/', async (req, resp)=>{
    let data =  await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});
app.post('/', async (req, resp) => {
    //console.log(req.body)
    //resp.send({name: "Yogesh"});
    //resp.send(req.body)
    //resp.send("All Good");
    let data = await dbConnect();
    //let result = await data.insertOne(req.body)
    let result = await data.insertMany(req.body)

    resp.send(result)
});

app.listen(5800);