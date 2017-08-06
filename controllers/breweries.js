const express = require('express');
const router = express.Router();

// breweries index page
router.get('/', (req, res)=>{
    res.render('breweries/index.ejs');
});

module.exports = router;
