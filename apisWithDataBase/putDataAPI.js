const express = require ('express');
const app = express();
app.use(express.json());

const dbConnect = require('../mongoDB/mongoDBConnectExport');
const { name } = require('ejs');

app.get('/', (req, resp)=>{
    resp.send({name: "Yogi ji Mahatma"});
})

// app.put('/', async(req, resp)=>{
    
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         //{name: "NikeBoyGood"},
//         //{$set: {name: "NikeBoyNew", price: "4650", Brand: "Nike"}}
//         {name: req.body.name},
//         {$set: req.body}
//     )
//     resp.send({result: "The Values has been updated."});
// })

app.put('/:name', async (req, resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
    )
    resp.send({result: "The values has been updated"})
})
app.listen(5900);