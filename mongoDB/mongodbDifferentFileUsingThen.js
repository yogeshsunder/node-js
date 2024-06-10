const { MongoClient } = require("mongodb")
const url = 'mongodb://localhost:27017';
const database = 'e-com';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let data = await collection.find({name: 'NikeSue'}).toArray();
    // console.log(data);
}
dbConnect().then((resp)=>{
    resp.find({name:'NikeAir'}).toArray().then((data)=>{
        console.log(data);
    })
})

