const dbConnect = require('./mongo_db');

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteOne({
        name: 'max pro'
    },);

    if (result.acknowledged) {
        console.log(result);
    }

}

deleteData();