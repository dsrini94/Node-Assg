const charFinder = require('express').Router();

const finder = require('./../modules/finder.js');

charFinder.post('/char',(req,res)=>{
      finder(req.query.text,(value)=>{
          res.send(value);
      })
});

module.exports = charFinder;
