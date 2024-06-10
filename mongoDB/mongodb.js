const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-com';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let data = await collection.find({name: 'NikeAir'}).toArray();
    console.log(data);
    
}
getData();