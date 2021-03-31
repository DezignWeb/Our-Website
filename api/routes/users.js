var express = require('express');
var router = express.Router();
var query = require('../src/Functions/query.js');

/* GET users listing. */
router.get("/",async(req, res, next) =>{
  // res.send('respond with a resource')
  xx = await query.queryitem()
  xx = res.json(xx)
  
  console.log(xx)
  res.send(xx)
});

module.exports = router;
