const express = require('express');
const router = express.Router();

// crew route
router.get('/', (req, res)=>{
  // res.send('hello');
    res.render('crew/index.ejs');
});

// new crew router
router.get('/new', (req, res)=>{
    res.render('crew/new.ejs')
})

module.exports = router;
