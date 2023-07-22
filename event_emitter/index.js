const express = require('express');

const EventEmitter = require('events');

const app = express();

const event = new EventEmitter();

let count = 0;


event.on('countAPI', () => {
    count++;
    console.log('countAPi event called', count)
});

app.get('/', (req, res) => {

    res.send('api called');
    count++;
    event.emit('countAPI')

});
app.get('/update', (req, res) => {

    res.send('update api called');
    count++;

});
app.get('/search', (req, res) => {

    res.send('search api called');
    count++;

});


app.listen(4000);