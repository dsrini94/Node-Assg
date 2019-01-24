const charFinder = require('express').Router();

const finder = require('./../modules/nonRepeatingCharFinder.moudle.js');

charFinder.post('/char',(req,res)=>{

  try{
    var fetchNonRepeatingCharacter = new Promise((resolve,reject) => {
      var nonRepeatingCharacter = finder(req.query.text);
      if(nonRepeatingCharacter != null)
      resolve(nonRepeatingCharacter);
      else
      reject;
    }).then((nonRepeatingCharacter)=>{
      res.send(nonRepeatingCharacter);
    })
  }
  catch(err){
    console.log(err);
  }


});

module.exports = charFinder;
