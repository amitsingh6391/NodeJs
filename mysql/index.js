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


app.use(express.json());

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

    const data = req.body;

    con.query("INSERT INTO users SET ?", data, (error, result, fields) => {

        if (error) {

            res.send(error);

        } else {
            res.send(result);
        }
    })

});

app.put("/", (req, res) => {
    const data = [req.body.name, req.body.password, req.body.users_type, 1];
    con.query('UPDATE users SET name = ? , password =?, users_type = ?', data, (error, result, field) => {

        if (error) throw error;
        res.send(result)


    });


    res.send("update api working")


},)

app.delete("/:name", (req, res) => {



    con.query("DELETE from users WHERE name =" + req.params.name, (error, result, field) => {
        if (error) throw error;
        res.send(result)

    })


}

)

app.listen(4000);