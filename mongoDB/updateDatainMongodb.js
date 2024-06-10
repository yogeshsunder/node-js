const dbConnect = require ('./mongodbDIfferentFileUsingMain');

const update = async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: 'NikeS'},{
            $set: { name: 'NikeScraper' }
        }
    )
    console.warn(result);
}

const updateOneMultiple = async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: 'NikeScraper', price: '1232'},{
            $set: { name: 'NikeScraper', price: '800' }
        }
    )
    console.warn(result);
}

const updateMany = async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        {name: 'NikeD'},{
            $set: { name: 'NikeDuo', price: '800' }
        }
    )
    console.warn(result);
}
updateMany();