const product = require('express').Router();

const pdt = require('./../modules/product.module.js');

product.get('/pdt',(req,res)=>{
  try{
    var operands = req.query;
    // pdt(operands.a,operands.b,(pdt)=>{
    //   res.send(JSON.stringify(pdt));
    // })

    var fetchProductValue = new Promise((resolve,reject) => {
      var productValue = pdt(operands.a,operands.b);
      if(productValue != 'Operands are not of type Integer' && productValue != null && productValue != undefined && productValue != NaN)
            resolve(productValue);
      }).then((productValue) => {
        res.send(JSON.stringify(productValue));
      })
  }
  catch(err){
    console.log(err);
  }
});

module.exports = product;
