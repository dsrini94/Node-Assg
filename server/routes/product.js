const product = require('express').Router();

const pdt = require('./../modules/pdt.js');

product.get('/pdt',(req,res)=>{
      var operands = req.query;
      pdt(operands.a,operands.b,(pdt)=>{
          res.send(JSON.stringify(pdt));
      })
});

module.exports = product;
