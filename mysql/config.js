const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
    port: 4306
});

con.connect((err) => {

    if (err) {
        console.log('error hiiii and err', err);
    } else {
        console.log('connected');
    }

});

module.exports = con;