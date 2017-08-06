const express = require('express');
const app = express();

// home route
app.get('/', (req, res)=>{
    res.render('index.ejs');
});

// use crew controller
const crewController = require('./controllers/crew.js');
app.use('/crew', crewController);

app.listen(3000, ()=>{
    console.log('listening....');
});
