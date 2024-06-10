const dbConnect = require('./mongodbDIfferentFileUsingMain');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name: 'NikeJ', price: '990', Brand: 'Nike'},
            {name: 'NikeK', price: '991', Brand: 'Nike'}
        ]
    );
    console.log(result.acknowledged);
}
insert();