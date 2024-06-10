const dbConnect = require('./mongodbDIfferentFileUsingMain');

const deleteRecord = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteOne(
        {name: 'NikeK'}
    )
    console.warn(result);
}

const deleteManyRecords = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteMany(
        {name: 'NikeDuo'}
    )
    console.warn(result);
    if(result.acknowledged)
        {
            console.log("Record Deleted");
        }
    if (result.deletedCount>0) {
        console.log("Record Actually Deleted");
    }
    else{
        console.log("Record Actually not deleted");
    }
}

deleteManyRecords();