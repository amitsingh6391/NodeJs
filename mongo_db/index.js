const dbConnect = require('./mongo_db');



const main = async () => {
    let data = await dbConnect();

    data = await data.find({}).toArray();

    console.log(data);


}

main();