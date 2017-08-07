const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// home route
app.get('/', (req, res)=>{
    res.render('index.ejs');
});

// use crew controller
const crewController = require('./controllers/crew.js');
app.use('/crew', crewController);

// use breweries controllers
const breweriesController = require('./controllers/breweries.js');
app.use('/breweries', breweriesController);

// mongoose connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/brewdex';

mongoose.connect(mongoURi);

mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('listening....');
});
