const mysql = require('mysql');
const express = require('express');

const con = require('./config');

const app = express();




// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test'
// });

// con.connect((err) => {

//     if (err) {
//         console.log('error');
//     } else {

//         console.log('connected');
//     }

// });

// con.query("select * from users", (err, result) => {

//     console.log("result", result)
// })


app.get('/', (req, res) => {

    con.query("select * from users", (err, result) => {
        if (err) {

            res.send('error');

        } else {

            res.send(result);

        }

    });

});

app.post('/', (req, res) => {

    const data = {

        name: "Amit Singh",
        password: "Singh@639134",
        users_type: "visitor"
    }


    con.query("INsert INTO users SET ?", data, (error, result, fields) => {

        if (error) {

            res.send(error);

        } else {
            res.send(result);
        }
    })

});

app.listen(4000);