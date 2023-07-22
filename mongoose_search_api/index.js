const express = require('express');

require('../mongoose_crud/config');

const product = require('../mongoose_crud/product');


const app = express();

app.use(express.json());


app.get('/search/:key', async (req, res) => {

    console.log(req.params);
    let data = await product.find({
        "$or": [
            {
                "name": { $regex: req.params.key },
            }, {
                "brand": { $regex: req.params.key },
            }
        ]
    });

    res.send(data);
});


app.listen(4000)