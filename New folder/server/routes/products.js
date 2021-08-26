var express = require('express');
const Product = require('../models/productModel');
var router = express.Router();


router.get('/', (req,res,next)=>
{
   Product.find((err,data)=>
   {
       if(err)  throw err;
       res.send(data);
   })
})


router.post('/', (req, res, next)=>
{
    Product.create(req.body, (err, data)=>
    {
        if(err) throw error;
        res.send(res.statusCode);
    });
});
module.exports = router;
