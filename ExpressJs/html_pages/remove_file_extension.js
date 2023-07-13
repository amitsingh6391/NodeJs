const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'public');


/// app.get() method will take params first is our endpoint where we want to deploy this
/// page and second is function which take req and response to render page.
/// And for root Page we do need to send endpoint this will be hosted on our web root url
//  eg: 
//  app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/home.html`);
//  });
// This will be hosted at localhost:4000;

app.set('view engine', 'ejs');
app.get('/home', (req, res) => {
    res.sendFile(`${publicPath}/home.html`);
});
app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

app.get('/profile', (req, res) => {
    const user = {
        name: "Amit",
        email: "amit@gmail.com"
    }
    res.render(`profile`, {
        user
    });
});
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/no_page.html`);
});
app.listen(4000);