const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Hello this is HomePagfe');
});

app.get('/about', (req, res) => {
    res.send('Hello this is About Page');
});

app.get('/help', (req, res) => {
    res.send('Hello this is Help Page');
});



app.listen(4000);