const { MongoClient} = require("mongodb")
const url = 'mongodb://localhost:27017';
const database = 'e-com';
const client = new MongoClient(url);

async function dbConnect(){
    let connection = await client.connect();
    let db = connection.db(database);
    return db.collection('products');
}

// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.warn(data);
//     })
// })

const main = async ()=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.warn(data);
}
main();

module.exports = dbConnect;
