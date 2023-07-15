const express = require('express');

const app = express();

const reqFilter = require('./middle_ware');
const router = express.Router();

//Added our middle ware for res and req filter
// const reqFilter = (req, res, next) => {
//     if (!req.query.age) {
//         res.send('Please provide age');
//     }
//     else if (req.query.age < 18) {
//         res.send('can not access provide age');
//     }

//     else {
//         next();
//     }


// }


//will call our middle ware here. this is application level middleware
// app.use(reqFilter);

router.use(reqFilter);

app.get('/', (req, res) => {

    res.send('Welcome to home page');
});

app.get('/users', (req, res) => {

    res.send('Welcome to User page');
});


router.get('/post', (req, res) => {

    res.send('Welcome to Post page');
});


//This is Route level middleware
app.get('/about', reqFilter, (req, res) => {

    res.send('Welcome to Post page');
});

app.use('/', router);

app.listen(4000);