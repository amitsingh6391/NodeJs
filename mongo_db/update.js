const dbConnect = require('./mongo_db');

const updateData = async () => {

    let data = await dbConnect();

    let result = await data.updateOne({
        name: 'max pro 5'
    }, {
        $set: { name: 'max pro' }
    }

    );

    console.log(result);
}

updateData();