const express = require ('express');
const app = express();
const mongodb = require('mongodb');
const dbConnect = require('../mongoDB/mongoDBConnectExport')
//app.use(express.json());

app.get('/', async (req, resp)=>{
    //resp.send({name: "Yogi ji ki Jai"});
    let data = await dbConnect();
    let result = await data.find().toArray();
    resp.send(result);
})

// app.delete('/', async (req, resp)=>{
//     //resp.send({name: "Yogi ji ki Jai"});
//     let data = await dbConnect();
//     let result = await data.deleteOne({
//         name: "NikeBoy2"
//     })
//     resp.send(result);
// })

app.delete('/:id', async (req, resp)=>{
    //resp.send({name: "Yogi ji ki Jai"});
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send({result});
})

app.listen(6000);