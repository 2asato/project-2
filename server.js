const express = require('express');
const app = express();
const mongoose = require('mongoose');

// home route
app.get('/', (req, res)=>{
    res.render('index.ejs');
});

// use crew controller
const crewController = require('./controllers/crew.js');
app.use('/crew', crewController);

// mongoose connection
mongoose.connect('mongodb://localhost:27017/brewdex');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

app.listen(3000, ()=>{
    console.log('listening....');
});
