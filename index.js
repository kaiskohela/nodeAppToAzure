const config = require('./config');

const express = require('express');

const app = express();
app.get('/', (req, res)=> {
    res.send('Welcome to the world of Azure Cloud and DevOps!! by kais ');
});

app.get('/greeting', (req, res)=> {
    res.send('Hello kais ');
});


app.listen(config.PORT, ()=>{
    console.log('Application started successfully on port : ' + config.PORT);
});