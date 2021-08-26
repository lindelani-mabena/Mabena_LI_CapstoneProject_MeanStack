var express = require('express');
const User = require('../models/userModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find((err, data)=>
  {
    if(err) throw err;
    res.send(data)
  });
});

router.put('/', function(req,res,next)
{ 
  User.find((err, data)=>
  {

  })
});

router.post('/', (req, res, next)=>
{
  User.create(req.body, (err,data)=>
  {
    if(err) throw err;
    res.send(data);
  })
})



module.exports = router;
