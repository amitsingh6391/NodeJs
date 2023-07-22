const mongoose = require('mongoose');


const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-com');

    const productSchema = new mongoose.Schema({
        name: String,
        category: String,
        brand: String,
        price: Number
    });


    const productsModel = mongoose.model('products', productSchema);

    let data = new productsModel({
        name: 'oppo 19',
        category: "mobikle",
        brand: "oppo",
        price: 1000,
    });

    let result = await data.save();

    console.log(result);

}


const saveInDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-com');

    const productSchema = new mongoose.Schema({
        name: String,
        category: String,
        brand: String,
        price: Number
    });


    const productsModel = mongoose.model('products', productSchema);

    let data = new productsModel({
        name: 'oppo 19',
        category: "mobikle",
        brand: "oppo",
        price: 1000,
    });

    let result = await data.save();

    console.log(result);

}


// main();
saveInDb();