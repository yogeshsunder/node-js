const { MongoClient} = require("mongodb")
const url = 'mongodb://localhost:27017';
const database = 'e-com';
const client = new MongoClient(url);

async function dbConnect(){
    let connection = await client.connect();
    let db = connection.db(database);
    return db.collection('products');
}

module.exports = dbConnect;
