const express = require('express');
const router = express.Router();
const Breweries = require('../models/breweries.js');

// breweries index page
router.get('/', (req, res)=>{
    Breweries.find({}, (err, foundBrewery)=>{
      res.render('breweries/index.ejs', {
        breweries: foundBrewery
        });
    });
});

// new brewery route
router.get('/new', (req, res)=>{
    res.render('breweries/new.ejs')
});

// brewery create route
router.post('/', (req, res)=>{
    Breweries.create(req.body, (err, createdBrewery)=>{
        res.redirect('/breweries');
    });
});

// brewery show route
router.get('/:id', (req, res)=>{
    Breweries.findById(req.params.id, (err, foundBrewery)=>{
        res.render('breweries/show.ejs', {
            breweries: foundBrewery
        });
    });
});

module.exports = router;
