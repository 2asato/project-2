const express = require('express');
const router = express.Router();
const Crew = require('../models/crew.js');

// delete route
router.delete('/:id', (req, res)=>{
    Crew.findByIdAndRemove(req.params.id, ()=>{
        res.redirect('/crew');
    });
});

// edit route
router.get('/:id/edit', (req, res)=>{
    Crew.findById(req.params.id, (err, foundCrew)=>{
        res.render('crew/edit.ejs', {
            crew: foundCrew
        });
    });
});

// put route
router.put('/:id', (req, res)=>{
    Crew.findByIdAndUpdate(req.params.id, req.body, ()=>{
        res.redirect('/crew/');
    });
});

// crew route
router.get('/', (req, res)=>{
  // res.send('hello');
    Crew.find({}, (err, foundCrew)=>{
        res.render('crew/index.ejs', {
            crew: foundCrew
        });
    });
});

// new crew router
router.get('/new', (req, res)=>{
    res.render('crew/new.ejs')
})

// add new profile
router.post('/', (req, res)=>{
    Crew.create(req.body, (err, createdCrew)=>{
        res.redirect('/crew');
    });
});

// profile show page route
router.get('/:id', (req, res)=>{
    Crew.findById(req.params.id, (err, foundCrew)=>{
        res.render('crew/show.ejs', {
          crew: foundCrew
        });
    });
});

module.exports = router;
