const dbConnect = require('./mongo_db');

const main = async () => {
    let data = await dbConnect();

    data = await data.insertOne({

        "name": "mivi12",
        "price": 90000,
        "brand": "mivi",
        "category": "Electronic"

    });

    console.log(data);
    data = await dbConnect();
    data = await data.find({}).toArray();

    console.log(data);
}

main();