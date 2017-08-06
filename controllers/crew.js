const express = require('express');
const router = express.Router();

// crew route
router.get('/', (req, res)=>{
  // res.send('hello');
  res.render('crew/index.ejs');
});

module.exports = router;
